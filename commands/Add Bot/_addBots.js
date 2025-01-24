/*CMD
  command: /addBots
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Add Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var bbbot = Libs.ResourcesLib.userRes("MyTotal")
var userId = user.telegramid.toString()

// Subscription limits
var BronzeLimit = 5
var SilverLimit = 10
var GoldLimit = 15
var PlatinumLimit = 20
var DiamondLimit = 25
var HeroicLimit = 30
var DeveloperLimit = Infinity

// Define users for each subscription plan
var BronzeUsers = [] // Free users
var SilverUsers = ["143", "63"]
var GoldUsers = ["35", "11"]
var PlatinumUsers = ["29"]
var DiamondUsers = ["12"]
var HeroicUsers = ["23"]
var DeveloperUsers = ["5572081489"]

// Get the user's subscription level
var userLimit = BronzeLimit // Default limit for Rookie
if (SilverUsers.includes(userId)) userLimit = SilverLimit
else if (GoldUsers.includes(userId)) userLimit = GoldLimit
else if (PlatinumUsers.includes(userId)) userLimit = PlatinumLimit
else if (DiamondUsers.includes(userId)) userLimit = DiamondLimit
else if (HeroicUsers.includes(userId)) userLimit = HeroicLimit
else if (DeveloperUsers.includes(userId)) userLimit = DeveloperLimit

// Check if user has reached their limit
if (bbbot.value() >= userLimit) {
  Api.editMessageText({
    message_id: User.getProperty("mmm"),
    text: `<b>👮 Yᴏᴜ’ᴠᴇ Rᴇᴀᴄʜᴇᴅ Tʜᴇ Mᴀxɪᴍᴜᴍ Bᴏᴛ Lɪᴍɪᴛ Aʟʟᴏᴡᴇᴅ Fᴏʀ Yᴏᴜʀ Cᴜʀʀᴇɴᴛ Pʟᴀɴ ${userLimit} Bᴏᴛs. Tᴏ Cʀᴇᴀᴛᴇ Mᴏʀᴇ, Iᴛ's Tɪᴍᴇ Tᴏ Uᴘɢʀᴀᴅᴇ Yᴏᴜʀ Pʟᴀɴ. Usᴇ /upgrade Tᴏ Exᴘʟᴏʀᴇ Oᴜʀ Sᴜʙsᴄʀɪᴘᴛɪᴏɴ Oᴘᴛɪᴏɴs.</b>`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "Uᴘɢʀᴀᴅᴇ Pʀᴇᴍɪᴜᴍ", callback_data: "/premium" }],
        [
          { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
  return
}

// Process the bot addition
User.setProperty("token", message)
HTTP.get({
  url: "https://api.telegram.org/bot" + message + "/getMe",
  success: "/addBotz"
})

