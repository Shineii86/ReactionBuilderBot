/*CMD
  command: /paid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Vip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({
  chat_id: chat.chatid,
  message_id: request.message_id
})
User.setProperty("amount", data.message, "string")
var id = User.getProperty("mmm")

// List of advertisements
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]

// Select a random advertisement
var randomAd = ads[Math.floor(Math.random() * ads.length)]

// Caption for the photo
var cap = `<b>👮 Sᴇɴᴅ Pᴀʏᴍᴇɴᴛ Pʀᴏᴏғ Sᴄʀᴇᴇɴsʜᴏᴛ.</b>

📮 Aᴅs: <a href='t.me/QuinxAdsBot'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Inline keyboard buttons
var inlineKeyboard = [
  [
    { text: "◁", callback_data: "/buy" },
    { text: "▢", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Api.editMessageText({
  chat_id: user.telegramid,
  message_id: id,
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlineKeyboard }
})

Bot.runCommand("/proof")

