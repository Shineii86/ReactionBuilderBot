/*CMD
  command: /buy
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

var cap = `<b>💰 Eɴᴛᴇʀ Aᴍᴏᴜɴᴛ Hᴏᴡ Mᴜᴄʜ Yᴏᴜ Wᴀɴᴛ Tᴏ Pᴀʏ</b>

<b>🔥 Pᴀʏᴍᴇɴᴛ Mᴇᴛʜᴏᴅs:
💰 Uᴘɪ Iᴅ Dᴍ:</b> <a href='t.me/Shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</a>
<b>👮 Oᴛʜᴇʀ Mᴇᴛʜᴏᴅs:</b> <a href='t.me/QuinxAds/7'>Vɪᴇᴡ Mᴏʀᴇ Dᴇᴛᴀɪʟs</a>

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`
// Keyboard Buttons
var button = [
  [
    { text: "◁ Bᴀᴄᴋ ", callback_data: "/premium" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]
var id = User.getProperty("mmm")
Api.editMessageText({
  chat_id: user.telegramid,
  message_id: id,
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})
Bot.runCommand("/paid")

