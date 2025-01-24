/*CMD
  command: /ads
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

var mm = User.getProperty("mmm")

// Interactions Code
var percentage = (
  (iteration_quota.progress / iteration_quota.limit) *
  100
).toFixed(2)
var totalChar = 10 // Shortened progress bar length
var occupied = ""
for (let i = 0; i < percentage / 10; i++) {
  // Adjusted for the shortened bar
  occupied += "■" // Unicode block character for filled progress
}
var blank = ""
if (occupied.length < totalChar) {
  let remaining = totalChar - occupied.length
  for (let j = 1; j <= remaining; j++) {
    blank += "□" // Unicode block character for empty progress
  }
}

// Progress Bar
var progressBar = occupied + blank

// Add logic for Ads status
var adsStatus = iteration_quota.progress >= 5000 ? "🔔" : "🔕"

// Add Logic for Paid/Free status
var status = iteration_quota.progress >= 5000 ? "Pᴀɪᴅ" : "Fʀᴇᴇ"

// Ads Array
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]

// Get a random ad
var randomAd = ads[Math.floor(Math.random() * ads.length)]

// Caption for the Bot's Photo
var cap = `<b>📌 Bʀᴏᴀᴅᴄᴀsᴛ Aᴅᴠᴇʀᴛɪsɪɴɢ Nᴏᴛɪᴄᴇ</>

Dᴇᴀʀ Usᴇʀs,
Tʜɪs Bᴏᴛ Rᴜɴs Oɴ Tʜᴇ <b><a href='https://play.google.com/store/apps/details?id=bb_app.com.bots.business'>Bᴏᴛs Bᴜsɪɴᴇss Pʟᴀᴛғᴏʀᴍ</a></>, Wʜɪᴄʜ Mᴀʏ Dɪsᴘʟᴀʏ Aᴅᴠᴇʀᴛɪsᴇᴍᴇɴᴛs Iɴ sᴏᴍᴇ Sɪᴛᴜᴀᴛɪᴏɴs. Pʟᴇᴀsᴇ Rᴇᴀᴅ Tʜᴇ Fᴏʟʟᴏᴡɪɴɢ Dᴇᴛᴀɪʟs Aʙᴏᴜᴛ Bʀᴏᴀᴅᴄᴀsᴛ Mᴇssᴀɢᴇs:  

<b>1. Wʜᴇɴ Aᴅs Sᴛᴀᴛᴜs Is:</>  🔔
Bʀᴏᴀᴅᴄᴀsᴛ Mᴇssᴀɢᴇs Wɪᴛʜ Aᴅs Aʀᴇ Sᴇɴᴛ Bʏ Tʜᴇ Hᴏsᴛɪɴɢ Pʟᴀᴛғᴏʀᴍ. <b>Tʜᴇ Bᴏᴛ Oᴡɴᴇʀ Aɴᴅ Dᴇᴠᴇʟᴏᴘᴇʀs Dᴏ Nᴏᴛ Cᴏɴᴛʀᴏʟ Tʜᴇ Cᴏɴᴛᴇɴᴛ Oғ Tʜᴇsᴇ Aᴅs.</> Usᴇʀs Aʀᴇ Eɴᴄᴏᴜʀᴀɢᴇᴅ Tᴏ Cᴀʀᴇғᴜʟʟʏ Vᴇʀɪғʏ Aɴʏ Lɪɴᴋs Oʀ Iɴғᴏʀᴍᴀᴛɪᴏɴ Iɴ Tʜᴇsᴇ Mᴇssᴀɢᴇs Bᴇғᴏʀᴇ Iɴᴛᴇʀᴀᴄᴛɪɴɢ Wɪᴛʜ Tʜᴇᴍ. Tʜᴇ Bᴏᴛ Oᴡɴᴇʀ Aɴᴅ Dᴇᴠᴇʟᴏᴘᴇʀs <b>Aʀᴇ Nᴏᴛ Rᴇsᴘᴏɴsɪʙʟᴇ Fᴏʀ Aɴʏ Issᴜᴇs Oʀ Lᴏssᴇs</> Rᴇsᴜʟᴛɪɴɢ Fʀᴏᴍ Tʜᴇsᴇ Bʀᴏᴀᴅᴄᴀsᴛs.  

<b>2. Wʜᴇɴ Aᴅs Sᴛᴀᴛᴜs Is:</>  🔕
Wɪᴛʜ Aᴅs Tᴜʀɴᴇᴅ Oғғ, Bʀᴏᴀᴅᴄᴀsᴛ Mᴇssᴀɢᴇs Aʀᴇ Rᴇᴅᴜᴄᴇᴅ. Hᴏᴡᴇᴠᴇʀ, Oɴ Tʜᴇ <b>Fʀᴇᴇ Pʟᴀɴ</>, Tʜᴇ Bᴏᴛ Is Lɪᴍɪᴛᴇᴅ Tᴏ 5,000 Iᴛᴇʀᴀᴛɪᴏɴs Pᴇʀ Mᴏɴᴛʜ. Tᴏ Iɴᴄʀᴇᴀsᴇ Tʜɪs Lɪᴍɪᴛ Tᴏ <b>1,000,000 Iᴛᴇʀᴀᴛɪᴏɴs</>, Eɴᴀʙʟɪɴɢ Aᴅs Is Rᴇҩᴜɪʀᴇᴅ Uɴᴅᴇʀ Tʜᴇ Hᴏsᴛɪɴɢ Pʟᴀɴ.  

<b>Tʜᴀɴᴋ Yᴏᴜ Fᴏʀ Yᴏᴜʀ Sᴜᴘᴘᴏʀᴛ!</>

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Inline Keyboard for Main Menu
var inlineKeyboard = [
  [
    {
      text: `Tᴏᴛᴀʟ : ${iteration_quota.limit}`,
      callback_data: "/ads"
    },
    {
      text: `Usᴇᴅ : ${iteration_quota.progress} (${percentage}%)`,
      callback_data: "/ads"
    }
  ],
  [{ text: `Pʀᴏɢʀᴇss : ${progressBar}`, callback_data: "/ads" }],
  [
    { text: `Pʟᴀɴ : ${status}`, callback_data: "/ads" },
    { text: `Aᴅs Sᴛᴀᴛᴜs : ${adsStatus}`, callback_data: "/ads" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

// if (request.message && request.message.message_id) {
  Api.editMessageText({
    message_id: mm, // request.message.message_id,
    text: cap,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard }
  })
// }

