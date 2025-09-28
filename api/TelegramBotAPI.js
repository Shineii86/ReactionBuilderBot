/**
 * @project     Reaction Builder Bot
 * @author      Shinei Nouzen
 * @repository  https://github.com/Shineii86/ReactionBuilderBot
 *
 * @copyright   © 2025 Reaction Builder Bot. All rights reserved.
 * @license     MIT
 */
 
import fetch from 'node-fetch';

export default class TelegramBotAPI {
    constructor(botToken) {
        if (!botToken || typeof botToken !== 'string') {
            throw new Error('Bot token is required and must be a string');
        }
        this.apiUrl = `https://api.telegram.org/bot${botToken}/`;
        this.botToken = botToken; // Store for potential reuse
    }

    async callApi(action, body, maxRetries = 3) {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(this.apiUrl + action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                    timeout: 10000 // 10 second timeout
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error(`Telegram API error (${action}):`, {
                        status: response.status,
                        statusText: response.statusText,
                        error: errorData
                    });
                    
                    // Don't retry on client errors (4xx)
                    if (response.status >= 400 && response.status < 500) {
                        throw new Error(`Telegram API ${response.status}: ${errorData.description || 'Unknown error'}`);
                    }
                    
                    // Retry on server errors (5xx) and network issues
                    if (attempt === maxRetries) {
                        throw new Error(`Telegram API request failed after ${maxRetries} attempts: ${action}`);
                    }
                    
                    // Wait before retrying (exponential backoff)
                    await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                    continue;
                }

                const data = await response.json();
                return data; // Return the actual response data

            } catch (error) {
                if (attempt === maxRetries) {
                    console.error(`Final attempt failed for ${action}:`, error);
                    throw error;
                }
                console.warn(`Attempt ${attempt} failed for ${action}, retrying...`);
                await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
            }
        }
    }

    /**
     * Set reaction on a message
     * @param {number} chatId - Unique identifier for the target chat
     * @param {number} messageId - Identifier of the message to react to
     * @param {string} emoji - Reaction emoji (single character)
     * @param {boolean} [isBig=false] - Whether to show a bigger reaction
     * @returns {Promise<Object>} Telegram API response
     */
    async setMessageReaction(chatId, messageId, emoji, isBig = true) {
        if (!emoji || typeof emoji !== 'string') {
            throw new Error('Emoji must be a non-empty string');
        }

        return await this.callApi('setMessageReaction', {
            chat_id: chatId,
            message_id: messageId,
            reaction: [{
                type: 'emoji',
                emoji: emoji.trim()
            }],
            is_big: isBig
        });
    }

    /**
     * Send a text message
     * @param {number} chatId - Unique identifier for the target chat
     * @param {string} text - Text of the message to be sent
     * @param {Array} [inlineKeyboard=null] - Inline keyboard markup
     * @param {string} [parseMode="Markdown"] - Parse mode (HTML, Markdown, MarkdownV2)
     * @param {boolean} [disablePreview=true] - Disable web page preview
     * @returns {Promise<Object>} Telegram API response
     */
    async sendMessage(chatId, text, inlineKeyboard = null, parseMode = "Markdown", disablePreview = true) {
        if (!text || typeof text !== 'string') {
            throw new Error('Message text is required and must be a string');
        }

        const payload = {
            chat_id: chatId,
            text: text,
            parse_mode: parseMode,
            disable_web_page_preview: disablePreview,
            ...(inlineKeyboard && { reply_markup: { inline_keyboard: inlineKeyboard } })
        };

        return await this.callApi('sendMessage', payload);
    }

    /**
     * Send an invoice for payment
     * @param {number} chatId - Unique identifier for the target chat
     * @param {string} title - Product name, 1-32 characters
     * @param {string} description - Product description, 1-255 characters
     * @param {string} payload - Bot-defined invoice payload, 1-128 bytes
     * @param {string} providerToken - Payments provider token
     * @param {string} startParameter - Unique deep-linking parameter
     * @param {string} currency - Three-letter ISO 4217 currency code
     * @param {Array} prices - Price breakdown, array of label/amount objects
     * @param {Object} [options] - Additional options for the invoice
     * @returns {Promise<Object>} Telegram API response
     */
    async sendInvoice(chatId, title, description, payload, providerToken, startParameter, currency, prices, options = {}) {
        // Basic validation
        if (!title || title.length > 32) {
            throw new Error('Title is required and must be 1-32 characters');
        }
        if (!description || description.length > 255) {
            throw new Error('Description is required and must be 1-255 characters');
        }

        const invoicePayload = {
            chat_id: chatId,
            title: title,
            description: description,
            payload: payload,
            provider_token: providerToken,
            start_parameter: startParameter,
            currency: currency,
            prices: prices,
            ...options
        };

        return await this.callApi('sendInvoice', invoicePayload);
    }

    /**
     * Answer a pre-checkout query
     * @param {string} preCheckoutQueryId - Unique identifier for the query
     * @param {boolean} ok - Specify if the order can be completed
     * @param {string} [errorMessage] - Required if ok is false, error message
     * @returns {Promise<Object>} Telegram API response
     */
    async answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMessage = null) {
        const payload = {
            pre_checkout_query_id: preCheckoutQueryId,
            ok: ok
        };

        if (!ok && errorMessage) {
            payload.error_message = errorMessage;
        }

        return await this.callApi('answerPreCheckoutQuery', payload);
    }

    /**
     * Get bot information (for health checks/validation)
     * @returns {Promise<Object>} Bot information
     */
    async getMe() {
        return await this.callApi('getMe');
    }

    /**
     * Simple health check for the bot
     * @returns {Promise<boolean>} Whether the bot is operational
     */
    async healthCheck() {
        try {
            const me = await this.getMe();
            return me && me.ok === true;
        } catch (error) {
            console.error('Bot health check failed:', error);
            return false;
        }
    }
}