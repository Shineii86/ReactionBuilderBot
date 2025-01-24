/*CMD
  command: /premium
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Vip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /upgrade, /subscription
  group: 
CMD*/

// Define All Dynamic Message Values
/* const Name =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Unknown"; */

// const username = user.username ? `@${user.username}` : "Unknown"
// const firstName = user.first_name || "Unknown"
// const lastName = user.last_name || "Unknown"
// const isBot = user.is_bot ? "Yᴇs" : "Nᴏ"
// const isPremium = user.is_premium ? "Yᴇs" : "Nᴏ"
// const languageCode = user.language_code || "Unknown"
// const userProfileLink = `<a href='tg://user?id=${user.telegramid}'>Vɪᴇᴡ Pʀᴏғɪʟᴇ</a>`
const userId = user.telegramid.toString()

/*
<b>👤 Fɪʀsᴛ Nᴀᴍᴇ:</b> ${firstName}
<b>👥 Lᴀsᴛ Nᴀᴍᴇ:</b> ${lastName}
<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> ${username}
<b>👤 Usᴇʀ Is Bᴏᴛ:</b> ${isBot}
<b>🏳️ Lᴀɴɢᴜᴀɢᴇ:</b> ${languageCode}
<b>💁 Pʀᴏғɪʟᴇ:</b> ${userProfileLink}
<b>🏆 Tᴇʟᴇɢʀᴀᴍ Pʀᴇᴍɪᴜᴍ:</b> ${isPremium}
*/

// Subscription limits
var BronzeLimit = 5 // 🥉
var SilverLimit = 10 // 🥈
var GoldLimit = 15 // 🥇
var PlatinumLimit = 20 // 🌟
var DiamondLimit = 25 // 💎
var HeroicLimit = 30 // 🦸
var DeveloperLimit = Infinity // ♾️

// Define users for each subscription plan
var BronzeUsers = [] // Free users (default, not explicitly listed)
var SilverUsers = ["143", "63"]
var GoldUsers = ["35", "11"]
var PlatinumUsers = ["29"]
var DiamondUsers = ["12"]
var HeroicUsers = ["23"]
var DeveloperUsers = ["5572081489"] // Replace with actual developer IDs

// Get the user's subscription level and limit
var userLimit = BronzeLimit // Default limit for Bronze
var userPlan = "Bʀᴏɴᴢᴇ" // Default plan is Bronze

if (SilverUsers.includes(user.telegramid.toString())) {
  userLimit = SilverLimit
  userPlan = "Sɪʟᴠᴇʀ"
} else if (GoldUsers.includes(user.telegramid.toString())) {
  userLimit = GoldLimit
  userPlan = "Gᴏʟᴅ"
} else if (PlatinumUsers.includes(user.telegramid.toString())) {
  userLimit = PlatinumLimit
  userPlan = "Pʟᴀᴛɪɴᴜᴍ"
} else if (DiamondUsers.includes(user.telegramid.toString())) {
  userLimit = DiamondLimit
  userPlan = "Dɪᴀᴍᴏɴᴅ"
} else if (HeroicUsers.includes(user.telegramid.toString())) {
  userLimit = HeroicLimit
  userPlan = "Hᴇʀᴏɪᴄ"
} else if (DeveloperUsers.includes(user.telegramid.toString())) {
  userLimit = DeveloperLimit
  userPlan = "Dᴇᴠᴇʟᴏᴘᴇʀ"
}

// User Balance
const userBalance = Libs.ResourcesLib.userRes("balance")

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

// <b>💰 Bᴀʟᴀɴᴄᴇ:</> ${userBalance.value()}
// Bot Caption Message
var cap = `<b>♨️ Tʜᴇʀᴇ Aʀᴇ Sᴏᴍᴇ Pʟᴀɴs Wɪᴛʜ Tʜᴇ Hᴇʟᴘ Oғ Tʜᴇsᴇ Pʟᴀɴs Yᴏᴜ Cᴀɴ Aᴅᴅ Oɴ Bᴏᴛs Aᴛ Tʜᴇ Lᴏᴡᴇsᴛ Pʀɪᴄᴇs</b>

<b>🤖 Bᴏᴛ Lɪᴍɪᴛ:</b> ${userLimit}
<b>🆔 Tᴇʟᴇɢʀᴀᴍ Iᴅ:</b> <code>${userId}</code>
<b>⭐ Cᴜʀʀᴇɴᴛ Pʟᴀɴ:</b> ${userPlan}

<b>Dɪsᴄʟᴀɪᴍᴇʀ:</> Tʜᴇ Dᴇᴠᴇʟᴏᴘᴇʀ Gᴜᴀʀᴀɴᴛᴇᴇs Tʜᴇ Lɪғᴇᴛɪᴍᴇ Vᴀʟɪᴅɪᴛʏ Oғ Yᴏᴜʀ Bᴏᴛs. Hᴏᴡᴇᴠᴇʀ, Iғ Aɴʏ Issᴜᴇ Aʀɪsᴇs Wɪᴛʜ Tʜᴇ Bᴏᴛ Hᴏsᴛɪɴɢ Sᴇʀᴠᴇʀ, Wᴇ Wɪʟʟ Nᴏᴛ Bᴇ Aʙʟᴇ Tᴏ Rᴇsᴏʟᴠᴇ Iᴛ.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Keyboard Buttons
var inlineKeyboard = [
  // [{ text: "Dᴇᴠᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" }],
  [
    { text: "Bʀᴏɴᴢᴇ Pʟᴀɴ", callback_data: "/bronze" },
    { text: "Sɪʟᴠᴇʀ Pʟᴀɴ", callback_data: "/silver" }
  ],
  [
    { text: "Gᴏʟᴅ Pʟᴀɴ", callback_data: "/gold" },
    { text: "Pʟᴀᴛɪɴᴜᴍ Pʟᴀɴ", callback_data: "/platinum" }
  ],
  [
    { text: "Dɪᴀᴍᴏɴᴅ Pʟᴀɴ", callback_data: "/diamond" },
    { text: "Hᴇʀᴏɪᴄ Pʟᴀɴ", callback_data: "/heroic" }
  ],
  [{ text: "Dᴇᴠᴇʟᴏᴘᴇʀ Pʟᴀɴ", callback_data: "/developer" }],
  [
    { text: "◁", callback_data: "/about" },
    { text: "▢", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

// Message handling
if (request.message && request.message.message_id) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: cap,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard }
  })
} else {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: cap,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard }
  })
}

