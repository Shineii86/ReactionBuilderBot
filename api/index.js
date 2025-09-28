/**
 * @project     Reaction Builder Bot
 * @author      Shinei Nouzen
 * @repository  https://github.com/Shineii86/ReactionBuilderBot
 *
 * @copyright   © 2025 Reaction Builder Bot. All rights reserved.
 * @license     MIT
 */

import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import TelegramBotAPI from "./TelegramBotAPI.js"
import { htmlContent, startMessage, donateMessage } from "./constants.js"
import { splitEmojis, getRandomPositiveReaction, getChatIds } from "./helper.js"

dotenv.config()

// Configuration
const config = {
  botToken: process.env.BOT_TOKEN,
  botUsername: process.env.BOT_USERNAME,
  reactions: splitEmojis(process.env.EMOJI_LIST),
  restrictedChats: getChatIds(process.env.RESTRICTED_CHATS),
  randomLevel: parseInt(process.env.RANDOM_LEVEL || "0", 10),
  port: process.env.PORT || 3000
}

// Validate essential configuration
if (!config.botToken || !config.botUsername) {
  throw new Error(
    "Missing required environment variables: BOT_TOKEN and BOT_USERNAME"
  )
}

const app = express()
const botApi = new TelegramBotAPI(config.botToken)

// Middleware
app.use(bodyParser.json())

// Bot command handlers
class BotHandlers {
  static async handleStartCommand(chatInfo, botApi) {
    const recipientName =
      chatInfo.chat.type === "private"
        ? chatInfo.from.first_name
        : chatInfo.chat.title

    const message = startMessage.replace("UserName", recipientName)
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
          text: "👾 Gɪᴛʜᴜʙ Sᴏᴜʀᴄᴇ  ✨",
          url: "https://github.com/Shineii86/ReactionBuilderBot"
        }
      ],
      [
        {text: "🔔 Uᴘᴅᴀᴛᴇs", url: "https://t.me/MaximXBots"}, 
        {text: "Sᴜᴘᴘᴏʀᴛ 💬", url: "https://t.me/MaximXGroup" } // Fixed: semicolon -> colon
      ],
      [
        {
          text: "💪  Sᴜᴘᴘᴏʀᴛ Us - Dᴏɴᴀᴛᴇ  🎁",
          url: "https://t.me/ReactionBuilderBot?start=donate"
        }
      ]
    ]

    await botApi.sendMessage(chatInfo.chat.id, message, keyboard)
  }

  static async handleReactionsCommand(chatId, botApi) {
    const reactionsList = config.reactions.join(", ")
    await botApi.sendMessage(
      chatId,
      `👮 Eɴᴀʙʟᴇᴅ Rᴇᴀᴄᴛɪᴏɴs: \n\n${reactionsList}`
    )
  }

  static async handleDonateCommand(chatId, botApi) {
    await botApi.sendInvoice(
      chatId,
      "🎁 Dᴏɴᴀᴛᴇ Tᴏ Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ ✨",
      donateMessage,
      "{}",
      "",
      "donate",
      "XTR",
      [{ label: "Pᴀʏ ⭐️1", amount: 1 }]
    )
  }

  static async handlePreCheckoutQuery(query, botApi) {
    await botApi.answerPreCheckoutQuery(query.id, true)
    await botApi.sendMessage(
      query.from.id,
      "🎁 Tʜᴀɴᴋ Yᴏᴜ Fᴏʀ Yᴏᴜʀ Dᴏɴᴀᴛɪᴏɴ! ✨"
    )
  }

  static async handleMessageReaction(content, botApi) {
    const { chat, message_id } = content

    if (config.restrictedChats.includes(chat.id)) {
      return // Skip restricted chats
    }

    const shouldReactRandomly = ["group", "supergroup"].includes(chat.type)
    const threshold = 1 - config.randomLevel / 10

    // Determine if we should react based on chat type and random level
    if (shouldReactRandomly) {
      if (Math.random() > threshold) return // Skip based on random level
    }

    const reaction = getRandomPositiveReaction(config.reactions)
    await botApi.setMessageReaction(chat.id, message_id, reaction)
  }
}

// Update processor
async function processUpdate(update) {
  try {
    if (update.message || update.channel_post) {
      const content = update.message || update.channel_post
      const { text, chat, message_id } = content

      // Handle commands
      if (update.message) {
        if (text === "/start" || text === `/start@${config.botUsername}`) {
          await BotHandlers.handleStartCommand(content, botApi)
          return
        }

        if (text === "/reactions") {
          await BotHandlers.handleReactionsCommand(chat.id, botApi)
          return
        }

        if (text === "/donate" || text === "/start donate") {
          await BotHandlers.handleDonateCommand(chat.id, botApi)
          return
        }
      }

      // Handle automatic reactions for non-command messages
      await BotHandlers.handleMessageReaction(content, botApi)
    } else if (update.pre_checkout_query) {
      await BotHandlers.handlePreCheckoutQuery(
        update.pre_checkout_query,
        botApi
      )
    }
  } catch (error) {
    console.error("Error processing update:", error)
    throw error // Re-throw to handle in the route
  }
}

// Routes
app.post("/", async (req, res) => {
  try {
    await processUpdate(req.body)
    res.status(200).send("OK")
  } catch (error) {
    console.error("Error in webhook handler:", error)
    res.status(200).send("OK") // Still return 200 to prevent retries from Telegram
  }
})

app.get("/", (req, res) => {
  res.send(htmlContent)
})

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    bot: config.botUsername
  })
})

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Unhandled error:", error)
  res.status(500).send("Internal Server Error")
})

// Start server
app.listen(config.port, () => {
  console.log(`🤖 Reaction Builder Bot is running on port ${config.port}`)
  console.log(`✨ Bot username: @${config.botUsername}`)
  console.log(`🎯 Reactions loaded: ${config.reactions.length}`)
  console.log(`🚫 Restricted chats: ${config.restrictedChats.length}`)
  console.log(`🎲 Random level: ${config.randomLevel}/10`)
})

export default app