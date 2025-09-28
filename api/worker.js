/**
 * @project     Reaction Builder Bot
 * @author      Shinei Nouzen
 * @repository  https://github.com/Shineii86/ReactionBuilderBot
 *
 * @copyright   © 2025 Reaction Builder Bot. All rights reserved.
 * @license     MIT
 */

import TelegramBotAPI from "./TelegramBotAPI.js";
import { htmlContent, startMessage, donateMessage } from './constants.js';
import { splitEmojis, returnHTML, getRandomPositiveReaction, getChatIds } from "./helper.js";

export default {
    async fetch(request, env, ctx) {
        try {
            // Validate environment variables
            if (!env.BOT_TOKEN || !env.BOT_USERNAME) {
                throw new Error('Missing required environment variables: BOT_TOKEN and BOT_USERNAME');
            }

            // Initialize configuration
            const config = {
                botToken: env.BOT_TOKEN,
                botUsername: env.BOT_USERNAME,
                reactions: splitEmojis(env.EMOJI_LIST || ''),
                restrictedChats: getChatIds(env.RESTRICTED_CHATS || ''),
                randomLevel: parseInt(env.RANDOM_LEVEL || '0', 10)
            };

            const botApi = new TelegramBotAPI(config.botToken);

            if (request.method === 'POST') {
                const data = await request.json();
                await this.handleWebhook(data, botApi, config);
                return new Response('OK', { status: 200 });
            } else if (request.method === 'GET') {
                // Handle health checks and web interface
                const url = new URL(request.url);
                
                if (url.pathname === '/health') {
                    return new Response(JSON.stringify({
                        status: 'OK',
                        timestamp: new Date().toISOString(),
                        bot: config.botUsername,
                        reactions: config.reactions.length,
                        restrictedChats: config.restrictedChats.length,
                        randomLevel: config.randomLevel
                    }), {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }
                
                // Return HTML interface for root path
                return new returnHTML(htmlContent);
            } else {
                return new Response('Method Not Allowed', { status: 405 });
            }

        } catch (error) {
            console.error('Error in fetch handler:', error);
            return new Response('Internal Server Error', { status: 500 });
        }
    },

    /**
     * Handle incoming webhook data
     * @param {Object} data - Telegram webhook data
     * @param {TelegramBotAPI} botApi - Bot API instance
     * @param {Object} config - Bot configuration
     */
    async handleWebhook(data, botApi, config) {
        try {
            if (data.message || data.channel_post) {
                await this.handleMessage(data, botApi, config);
            } else if (data.pre_checkout_query) {
                await this.handlePreCheckout(data.pre_checkout_query, botApi);
            }
        } catch (error) {
            console.error('Error handling webhook:', error);
            throw error;
        }
    },

    /**
     * Handle message and channel post updates
     */
    async handleMessage(data, botApi, config) {
        const content = data.message || data.channel_post;
        const { chat, message_id, text } = content;

        // Handle commands from private messages only
        if (data.message && text && text.startsWith('/')) {
            await this.handleCommand(text, content, botApi, config);
            return;
        }

        // Handle automatic reactions for non-command messages
        await this.handleAutomaticReaction(content, botApi, config);
    },

    /**
     * Handle bot commands
     */
    async handleCommand(text, content, botApi, config) {
        const { chat, from } = content;
        
        if (text === '/start' || text === `/start@${config.botUsername}`) {
            await this.handleStartCommand(chat, from, botApi, config);
        } else if (text === '/reactions') {
            await this.handleReactionsCommand(chat.id, botApi, config);
        } else if (text === '/donate' || text === '/start donate') {
            await this.handleDonateCommand(chat.id, botApi);
        }
    },

    /**
     * Handle /start command
     */
    async handleStartCommand(chat, from, botApi, config) {
        const recipientName = chat.type === "private" ? from.first_name : chat.title;
        const message = startMessage.replace('UserName', recipientName);
        
        const keyboard = [
            [
                { 
                    text: "✚ Aᴅᴅ Tᴏ Cʜᴀɴɴᴇʟ", 
                    url: `https://t.me/${config.botUsername}?startchannel=botstart` 
                },
                { 
                    text: "Aᴅᴅ Tᴏ Gʀᴏᴜᴘ ✚", 
                    url: `https://t.me/${config.botUsername}?startgroup=botstart` 
                }
            ],
            [
                { 
                    text: "👾 Gɪᴛʜᴜʙ Sᴏᴜʀᴄᴇ ✨", 
                    url: "https://github.com/Shineii86/ReactionBuilderBot" 
                }
            ],
            [
                { text: "🔔 Uᴘᴅᴀᴛᴇs", url: "https://t.me/MaximXBots" },
                { text: "Sᴜᴘᴘᴏʀᴛ 💬", url: "https://t.me/MaximXGroup" }
            ],
            [
                { 
                    text: "💪 Sᴜᴘᴘᴏʀᴛ Us - Dᴏɴᴀᴛᴇ 🎁", 
                    url: `https://t.me/${config.botUsername}?start=donate` 
                }
            ]
        ];

        await botApi.sendMessage(chat.id, message, keyboard);
    },

    /**
     * Handle /reactions command
     */
    async handleReactionsCommand(chatId, botApi, config) {
        const reactionsList = config.reactions.join(", ");
        await botApi.sendMessage(chatId, `👮 Eɴᴀʙʟᴇᴅ Rᴇᴀᴄᴛɪᴏɴs: \n\n${reactionsList}`);
    },

    /**
     * Handle /donate command
     */
    async handleDonateCommand(chatId, botApi) {
        await botApi.sendInvoice(
            chatId,
            "🎁 Dᴏɴᴀᴛᴇ Tᴏ Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ ✨",
            donateMessage,
            '{}',
            '',
            'donate',
            'XTR',
            [{ label: 'Pᴀʏ ⭐️1', amount: 1 }]
        );
    },

    /**
     * Handle automatic message reactions
     */
    async handleAutomaticReaction(content, botApi, config) {
        const { chat, message_id } = content;

        // Skip restricted chats
        if (config.restrictedChats.includes(chat.id)) {
            return;
        }

        // Calculate reaction probability based on chat type and random level
        const threshold = 1 - (config.randomLevel / 10);
        const isGroupChat = ["group", "supergroup"].includes(chat.type);
        
        // For group chats, apply random level; for others, always react
        if (isGroupChat && Math.random() > threshold) {
            return;
        }

        const reaction = getRandomPositiveReaction(config.reactions);
        await botApi.setMessageReaction(chat.id, message_id, reaction);
    },

    /**
     * Handle pre-checkout queries for donations
     */
    async handlePreCheckout(query, botApi) {
        await botApi.answerPreCheckoutQuery(query.id, true);
        await botApi.sendMessage(query.from.id, "🎁 Tʜᴀɴᴋ Yᴏᴜ Fᴏʀ Yᴏᴜʀ Dᴏɴᴀᴛɪᴏɴ! ✨");
    }
};