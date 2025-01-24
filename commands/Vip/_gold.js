/*CMD
  command: /gold
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Vip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
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

// Bot Caption Message
var cap = `<b>♨️ Tʜᴇʀᴇ Iѕ Sᴏᴍᴇ Gᴏʟᴅ Pʟᴀɴ Dᴇᴛᴀɪʟs</>

<b>💰 Pʀɪᴄᴇ:</> ₹150 • $3.50
<b>💎 Fᴇᴀᴛᴜʀᴇ:</> 15 Bᴏᴛs Cʀᴇᴀᴛɪᴏɴ
<b>🕑 Vᴀʟɪᴅɪᴛʏ:</> Lɪғᴇᴛɪᴍᴇ Sᴇʀᴠɪᴄᴇ

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

var inlineKeyboard = [
  [{ text: "Bᴜʏ Pʟᴀɴ", callback_data: "/buy" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/premium" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

if (request.message && request.message.message_id) {
  // Editing existing message text
  Api.editMessageText({
    message_id: request.message.message_id,
    text: cap,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard }
  })
}

