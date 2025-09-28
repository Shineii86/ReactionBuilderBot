/**
 * @project     Reaction Builder Bot
 * @author      Shinei Nouzen
 * @repository  https://github.com/Shineii86/ReactionBuilderBot
 *
 * @copyright   © 2025 Reaction Builder Bot. All rights reserved.
 * @license     MIT
 */

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import TelegramBotAPI from './TelegramBotAPI.js';
import { htmlContent, startMessage, donateMessage } from './constants.js';
import { splitEmojis, getRandomPositiveReaction, getChatIds } from './helper.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const botToken = process.env.BOT_TOKEN;
const botUsername = process.env.BOT_USERNAME;
const Reactions = splitEmojis(process.env.EMOJI_LIST);
const RestrictedChats = getChatIds(process.env.RESTRICTED_CHATS);
const RandomLevel = parseInt(process.env.RANDOM_LEVEL || '0', 10);

const botApi = new TelegramBotAPI(botToken);

app.post('/', async (req, res) => {
    const data = req.body;
    try {
        await onUpdate(data, botApi, Reactions, RestrictedChats, botUsername, RandomLevel);
        res.status(200).send('Ok');
    } catch (error) {
        console.info('Error in onUpdate:', error);
        res.status(200).send('Ok');
    }
});

app.get('/', (req, res) => {
    res.send(htmlContent);
});

async function onUpdate(data, botApi, Reactions, RestrictedChats, botUsername, RandomLevel) {
    let chatId, message_id, text;

    if (data.message || data.channel_post) {
        const content = data.message || data.channel_post;
        chatId = content.chat.id;
        message_id = content.message_id;
        text = content.text;

        if (data.message && (text === '/start' || text === `/start@${botUsername}`)) {
            await botApi.sendMessage(chatId, startMessage.replace('UserName', content.chat.type === "private" ? content.from.first_name : content.chat.title), [
                [
                    {
                        text: "✚ Aᴅᴅ Tᴏ Cʜᴀɴɴᴇʟ",
                        url: `https://t.me/${botUsername}?startchannel=botstart`
                    },
                    {
                        text: "Aᴅᴅ Tᴏ Gʀᴏᴜᴘ ✚",
                        url: `https://t.me/${botUsername}?startgroup=botstart`
                    }
                ],
                [
                    {
                        text: "👾 Gɪᴛʜᴜʙ Sᴏᴜʀᴄᴇ  ✨",
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
                        url: "https://t.me/ReactionBuilderBot?start=donate"
                    }
                ]
            ]);
        } else if (data.message && text === '/reactions') {
            const reactions = Reactions.join(", ");
            await botApi.sendMessage(chatId, "✅ Eɴᴀʙʟᴇᴅ Rᴇᴀᴄᴛɪᴏɴs: \n\n" + reactions);
        } else if (data.message && (text === '/donate' || text === '/start donate')) {
            await botApi.sendInvoice(
                chatId,
                "🎁 Dᴏɴᴀᴛᴇ Tᴏ Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ ✨",
                donateMessage,
                '{}',
                '',
                'donate',
                'XTR',
                [{ label: 'Pᴀʏ 1 ⭐', amount: 1 }]
            );
        } else {
            // Calculate the threshold: higher RandomLevel, lower threshold
            let threshold = 1 - (RandomLevel / 10);
            if (!RestrictedChats.includes(chatId)) {
                if (["group", "supergroup"].includes(content.chat.type)) {
                    // Run randomly according to RandomLevel
                    if (Math.random() <= threshold) {
                        await botApi.setMessageReaction(chatId, message_id, getRandomPositiveReaction(Reactions));
                    }
                } else {
                    await botApi.setMessageReaction(chatId, message_id, getRandomPositiveReaction(Reactions));
                }
            }
        }
    } else if (data.pre_checkout_query) {
        await botApi.answerPreCheckoutQuery(data.pre_checkout_query.id, true);
        await botApi.sendMessage(data.pre_checkout_query.from.id, "🎁 Tʜᴀɴᴋ Yᴏᴜ Fᴏʀ Yᴏᴜʀ Dᴏɴᴀᴛɪᴏɴ! ✨");
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
