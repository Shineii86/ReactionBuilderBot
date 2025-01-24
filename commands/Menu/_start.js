/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /verify
  group: 
CMD*/

let wll = User.getProperty("NewUser")
if (!wll || wll == undefined) {
  let free = new Date().toLocaleString("en-US", {
    timeZone: "Asia/kolkata"
  })
  let dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
  let tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
  let dxy = Libs.DateTimeFormat.format(free, " dddd")
  Bot.setProperty("join" + user.telegramid, dxy + " " + dt + " - " + tm + "M")
  let status = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
  status.add(1)
  Bot.setProperty("Chat" + user.telegramid, chat, "json")
  let ai2 = Bot.getProperty("admin_chat")

  // 𝗡𝗘𝗪 𝗨𝗦𝗘𝗥 𝗟𝗢𝗚 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡 //
  // Check if the chat was just created and it's a private chat
  if (chat && chat.just_created && chat.chat_type == "private") {
    // Initialize or retrieve the global counter for new users
    var statu = Libs.ResourcesLib.anotherChatRes("to", "global")

    // Ensure the counter is properly initialized if it's not already
    if (statu.value() === undefined || statu.value() === 0) {
      statu.set(1) // Set initial value to 1
    } else {
      statu.add(1) // Increment the counter if it already exists
    }
    // Get the current date and time in Asia/Kolkata timezone
    var currentDate = new Date().toLocaleDateString("en-US", {
      timeZone: "Asia/Kolkata"
    })
    var currentTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata"
    })

    // User's Name
    var Name =
      user && user.first_name
        ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
        : "Unknown"

    // Bot's Username
    var BotName = bot.name

    // Construct the log message
    var log = `
<b>▧ Nᴇᴡ Usᴇʀ Nᴏᴛɪғɪᴄᴀᴛɪᴏɴ ✨</b>
┋
┋┏ Nᴀᴍᴇ: ${Name}
┋┣ Usᴇʀɴᴀᴍᴇ: @${user.username}
┋┣ Tᴇʟᴇɢʀᴀᴍ Iᴅ: <a href="tg://user?id=${user.telegramid}">${user.telegramid}</a>
┋┃
┋┣ Dᴀᴛᴇ: ${currentDate}
┋┣ Tɪᴍᴇ: ${currentTime}
┋┃
┋┣ Tᴏᴛᴀʟ Usᴇʀs: ${statu.value()}
┋┗ Bᴏᴛ Nᴀᴍᴇ: @${BotName}`

    // Send New user Notification
    Api.sendMessage({
      chat_id: ai2,
      text: log,
      parse_mode: "HTML"
    })
  }
  // Function to get a random number between a min and max range
  function getRandom(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2) // 2 decimal points
  }

  // Function to get a random integer between a min and max range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // Total Users
  var totalTraffic = getRandomInt(100, 500) // Random traffic between 100 and 500

  // Format time for display
  function formatTime(seconds) {
    let days = Math.floor(seconds / (24 * 3600))
    let hours = Math.floor((seconds % (24 * 3600)) / 3600)
    let minutes = Math.floor((seconds % 3600) / 60)
    let secs = seconds % 60

    return `${days} Dᴀʏs, ${hours}ʜ:${minutes}ᴍ:${secs}s`
  }

  // Fake uptime generator (2-3 days range for uptime)
  let uptimeSeconds = getRandomInt(1 * 24 * 3600, 2 * 24 * 3600) // 1-2 days in seconds
  let fakeUptime = formatTime(uptimeSeconds)

  // Fake user and chat counts (randomized range)
  let fakeUsers = getRandomInt(1000, 5000)
  let fakeChats = getRandomInt(500, 1000)

  // Ads
  var ads = [
    "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
    "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
    "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
    "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
    "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
    "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
  ]
  var randomAd = ads[Math.floor(Math.random() * ads.length)]

  // Keyboard Buttons
  let inl = [
    [
      { text: "🤖 Aᴅᴅ Bᴏᴛ", callback_data: "/addbot" },
      { text: "Mʏ Bᴏᴛs 🏝️", callback_data: "/mybot" }
    ],
    [
      { text: "👮 Hᴇʟᴘ Cᴇɴᴛʀᴇ", callback_data: "/help" },
      { text: "Aʙᴏᴜᴛ Us 👤", callback_data: "/about" }
    ],
    [{ text: "⭐ Bᴜʏ Sᴜʙsᴄʀɪᴘᴛɪᴏɴ ✨", callback_data: "/premium" }]
  ]

  // Username
  var fname =
    user && user.first_name
      ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
      : "Uɴᴋɴᴏᴡɴ"

  // First Message
  let tto = `🏖️ Hᴇʟʟᴏ <b>${fname}</b>, Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ Wɪʟʟ Hᴇʟᴘ Yᴏᴜ Tᴏ Cʀᴇᴀᴛᴇ Yᴏᴜʀ Oᴡɴ Aᴜᴛᴏ Rᴇᴀᴄᴛɪᴏɴ Bᴏᴛ
━━━━━━━━━━━━━━━━━━
•» <b>Dᴇᴍᴏ</b> @ReactionCloneBot
•» <b>Uᴘᴛɪᴍᴇ:</b> ${fakeUptime}  
•» ${fakeUsers} <b>Boᴛs, Aᴄʀᴏss</b> ${fakeChats} <b>Cʜᴀɴɴᴇʟs</b>  
━━━━━━━━━━━━━━━━━━
Yᴏᴜ Cᴀɴ Eᴀsɪʟʏ Cʀᴇᴀᴛᴇ Yᴏᴜʀ Oᴡɴ Bʏ Cʟᴏɴɪɴɢ Tʜᴇ Bᴏᴛ. Jᴜsᴛ Cʟɪᴄᴋ Tʜᴇ <b>Aᴅᴅ Bᴏᴛ</b> Bᴜᴛᴛᴏɴ Bᴇʟᴏᴡ Tᴏ Gᴇᴛ Sᴛᴀʀᴛᴇᴅ!

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  // Send Stickers
  Api.sendSticker({
    chat_id: chat.chatid,
    sticker:
      "CAACAgUAAxkBAAMRZ3jFWIqvk1F5u12ic4gX_cLpoO0AAqoQAALB87hXsRibkZvIWAI2BA",
    on_result: "/deleteafter"
  })
  Api.sendMessage({
    text: tto,
    parse_mode: "HTML",
    on_result: "mmm",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
  User.setProperty("NewUser", true + "" + user.id, "text")
  return
}
/////////////////////////////////////////////////////////////////////////////////////////
/////// ㅤ///////ㅤ ///////ㅤ/////// ㅤ///////ㅤ //////ㅤ////// ㅤ//////ㅤ //////
/////////////////////////////////////////////////////////////////////////////////////////
// Function to get a random number between a min and max range
function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2) // 2 decimal points
}

// Function to get a random integer between a min and max range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Total Users
var totalTraffic = getRandomInt(100, 500) // Random traffic between 100 and 500

// Format time for display
function formatTime(seconds) {
  let days = Math.floor(seconds / (24 * 3600))
  let hours = Math.floor((seconds % (24 * 3600)) / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let secs = seconds % 60

  return `${days} Dᴀʏs, ${hours}ʜ:${minutes}ᴍ:${secs}s`
}

// Fake uptime generator (2-3 days range for uptime)
let uptimeSeconds = getRandomInt(1 * 24 * 3600, 2 * 24 * 3600) // 1-2 days in seconds
let fakeUptime = formatTime(uptimeSeconds)

// Fake user and chat counts (randomized range)
let fakeUsers = getRandomInt(1000, 5000)
let fakeChats = getRandomInt(500, 1000)

// Ads
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]
var randomAd = ads[Math.floor(Math.random() * ads.length)]

// Keyboard Buttons
let inl = [
  [
    { text: "🤖 Aᴅᴅ Bᴏᴛ", callback_data: "/addbot" },
    { text: "Mʏ Bᴏᴛs 🏝️", callback_data: "/mybot" }
  ],
  [
    { text: "👮 Hᴇʟᴘ Cᴇɴᴛʀᴇ", callback_data: "/help" },
    { text: "Aʙᴏᴜᴛ Us 👤", callback_data: "/about" }
  ],
  [{ text: "⭐ Bᴜʏ Sᴜʙsᴄʀɪᴘᴛɪᴏɴ ✨", callback_data: "/premium" }]
]
const ai2 = Bot.getProperty("admin_chat")
// Replace With Your Telegram ID
// var adminID = 5572081489
if (user.telegramid == ai2) {
  inl.push([{ text: "Aᴅᴍɪɴ 𝘤𝘗𝘢𝘯𝘦𝘭", callback_data: "/admin" }]) // Add "Admin" button
}

// Username
var fname =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Uɴᴋɴᴏᴡɴ"
let mm = User.getProperty("mmm")
// Second Message
let tto = `👋 Hᴇʟʟᴏ <b>${fname}</b>, Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ Wɪʟʟ Hᴇʟᴘ Yᴏᴜ Tᴏ Cʀᴇᴀᴛᴇ Yᴏᴜʀ Oᴡɴ Aᴜᴛᴏ Rᴇᴀᴄᴛɪᴏɴ Bᴏᴛ
━━━━━━━━━━━━━━━━━━
•» <b>Dᴇᴍᴏ</b> @ReactionCloneBot
•» <b>Uᴘᴛɪᴍᴇ:</b> ${fakeUptime}  
•» ${fakeUsers} <b>Boᴛs, Aᴄʀᴏss</b> ${fakeChats} <b>Cʜᴀɴɴᴇʟs</b>  
━━━━━━━━━━━━━━━━━━
Yᴏᴜ Cᴀɴ Eᴀsɪʟʏ Cʀᴇᴀᴛᴇ Yᴏᴜʀ Oᴡɴ Bʏ Cʟᴏɴɪɴɢ Tʜᴇ Bᴏᴛ. Jᴜsᴛ Cʟɪᴄᴋ Tʜᴇ <b>Aᴅᴅ Bᴏᴛ</b> Bᴜᴛᴛᴏɴ Bᴇʟᴏᴡ Tᴏ Gᴇᴛ Sᴛᴀʀᴛᴇᴅ!

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

if (request.message_id) {
  Api.deleteMessage({ chat_id: chat.chatid, message_id: mm })
  Api.sendMessage({
    text: tto,
    parse_mode: "HTML",
    on_result: "mmm",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
} else {
  Api.editMessageText({
    message_id: mm,
    text: tto,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
}

