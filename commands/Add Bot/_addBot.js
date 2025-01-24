/*CMD
  command: /addBot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Add Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /addbot
  group: 
CMD*/

// Bot Advertising
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]
var randomAd = ads[Math.floor(Math.random() * ads.length)]

// Text Message. [<b>📌 Nᴏᴛᴇ : Aɴʏᴛɪᴍᴇ Yᴏᴜʀ Bᴏᴛ Cᴏᴜʟᴅ Bᴇ Sᴛᴏᴘᴘᴇᴅ ᴀɴᴅ Dᴏɴᴛ Bʟᴀᴍᴇ Us!</b>]
var cap = `<b>💬 Hᴏᴡ Tᴏ Cʟᴏɴᴇ Tʜɪs Bᴏᴛ - Hᴇʟᴘ Gᴜɪᴅᴇ</b>

Sᴇɴᴅ Tʜᴇ Bᴏᴛ Aᴘɪ Tᴏᴋᴇɴ Cʀᴇᴀᴛᴇᴅ Fʀᴏᴍ @BotFather
❶ Gᴏ Tᴏ @BotFather.
❷ Cʀᴇᴀᴛᴇ A Bᴏᴛ.
❸ Cᴏᴘʏ Tʜᴇ Bᴏᴛ Tᴏᴋᴇɴ Aɴᴅ Sᴇɴᴅ Iᴛ Tᴏ Mᴇ. (Oɴʟʏ Bᴏᴛ Tᴏᴋᴇɴ Mᴜsᴛ Bᴇ Sᴇɴᴛ Dᴏ Nᴏᴛ Sᴇɴᴅ Tᴏᴋᴇɴ Iɴᴄʟᴜᴅᴇᴅ Wɪᴛʜ Tᴇxᴛ)

Tʜᴇ Bᴏᴛ Tᴏᴋᴇɴ Wʜɪᴄʜ Yᴏᴜʀ Sᴇɴᴅɪɴɢ Mᴜsᴛ Nᴏᴛ Bᴇ Usᴇᴅ Bᴇғᴏʀᴇ Oɴ Aɴᴏᴛʜᴇʀ Bᴏᴛ!

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Keyboard Buttons
Api.editMessageText({
  message_id: User.getProperty("mmm"),
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "Tᴜᴛᴏʀɪᴀʟ Vɪᴅᴇᴏ", url: "https://youtu.be/qv01EKsU1WU" }],
      [
        { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})
Bot.runCommand("/addBots")

