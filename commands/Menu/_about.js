/*CMD
  command: /about
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Bot Username
var botName = bot.name

var mm = User.getProperty("mmm")

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

// Add logic for Ads status
var adsStatus = iteration_quota.progress >= 5000 ? "Oɴ" : "Oғғ"

// Bot Caption Message
var cap = `<b>💪 <a href='http://t.me/${botName}'>Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ</a></b> Cʀᴀғᴛᴇᴅ Bʏ <b><a href='http://t.me/Shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</a></b> Usɪɴɢ <b>Jᴀᴠᴀ Sᴄʀɪᴘᴛ</b> Uɴᴅᴇʀ Tʜᴇ <b><a href='https://bots.business/'>Bᴏᴛ Bᴜsɪɴᴇss</a></b> Fʀᴀᴍᴇᴡᴏʀᴋ.

🌐 <b>Nᴇᴛᴡᴏʀᴋ:</b> <a href='http://t.me/QuinxNetwork'>Ҩᴜɪɴx Nᴇᴛᴡᴏʀᴋ</a>
📢 <b>Mᴀɪɴ Cʜᴀɴɴᴇʟ:</b> <a href='http://t.me/MaximXBots'>Mᴀxɪᴍ X Bᴏᴛs</a>
💬 <b>Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ:</b> <a href='http://t.me/MaximxGroup'>Mᴀxɪᴍ X Gʀᴏᴜᴘ</a>

Fᴏʀ Aɴʏ Issᴜᴇs, Fᴇᴇᴅʙᴀᴄᴋ, Oʀ Sᴜᴘᴘᴏʀᴛ Fʀᴇᴇ Tᴏ Rᴇᴀᴄʜ Oᴜᴛ Tᴏ Tʜᴇ Dᴇᴠᴇʟᴏᴘᴇʀ Tʜʀᴏᴜɢʜ Tʜᴇ Pʀᴏᴠɪᴅᴇᴅ Cᴏɴᴛᴀᴄᴛ Lɪɴᴋ.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

var inlineKeyboard = [
  [
    { text: `🔔 Aᴅs Sᴛᴀᴛᴜs: ${adsStatus}`, callback_data: "/ads" },
    { text: "Sᴜʙsᴄʀɪᴘᴛɪᴏɴ ⭐", callback_data: "/premium" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

if (request.message && request.message.message_id) {
  // Editing existing message text
  Api.editMessageText({
    message_id: mm, // request.message.message_id,
    text: cap,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard }
  })
}

