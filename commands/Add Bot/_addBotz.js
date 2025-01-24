/*CMD
  command: /addBotz
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Add Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var r = JSON.parse(content)
var st = r.ok
var mm = User.getProperty("mmm")
var token = User.getProperty("token")

// Time formatting
var free = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
var tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
var dxy = Libs.DateTimeFormat.format(free, "dddd")
var time = dxy + " " + dt + " " + tm + "M"

let istTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata"
})
var dt_ist = Libs.DateTimeFormat.format(istTime, "dd/mm/yyyy")
var tm_ist = Libs.DateTimeFormat.format(istTime, "h:MM:ss T")
// var dxy_ist = Libs.DateTimeFormat.format(istTime, " dddd")

// Resources and properties
var bbbot = Libs.ResourcesLib.userRes("MyTotal")
var bots = Bot.getProperty("MyBotLists" + user.telegramid)
var cn = Libs.ResourcesLib.anotherChatRes("connected", "global")
var adm = Bot.getProperty("adminID")

// Check if token is valid
if (st === true) {
  var username = r.result.username

  // Prevent duplicate bots
  for (var index in bots) {
    var b = bots[index].name
    if (b === username) {
      Api.editMessageText({
        message_id: mm,
        text: `*🤔 Tʜɪs @${username} Bᴏᴛ Is Aʟʀᴇᴀᴅʏ Cᴏɴɴᴇᴄᴛᴇᴅ Bʏ Yᴏᴜ. Pʟᴇᴀsᴇ Usᴇ A Nᴇᴡ Bᴏᴛ Tᴏᴋᴇɴ!*`,
        parse_mode: "markdown",
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [
            [
              { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
              { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
            ]
          ]
        }
      })
      return
    }
  }

  // Clone the bot
  BBAdmin.cloneBot({
    bot_id: 1868013, // Replace With Your BB Bot ID
    token: token,
    run_now: true,
    bot_properties: [
      { name: "admin_chat", value: user.telegramid, type: "string" }
    ]
  })
  // Send Stickers
  Api.sendSticker({
    chat_id: chat.chatid,
    sticker:
      "CAACAgUAAxkBAAIHkGeP2aMDTvjUVR3jpjtASiR4a-8uAALhEQACZ-PAV_Vedi1hika3NgQ",
    on_result: "/deleteafter"
  })

  var tto = `<b>🎊 Cᴏɴɴᴇᴄᴛɪᴏɴ Sᴜᴄᴄᴇssғᴜʟ 🥳</b>

<b>» Usᴇʀɴᴀᴍᴇ:</b> @${username}  
<b>» Dᴀᴛᴇ:</> ${dt} <b>Tɪᴍᴇ:</> ${tm}ᴍ
 
<i>Yᴏᴜʀ Cᴏɴɴᴇᴄᴛɪᴏɴ Tᴏ Tʜᴇ Rᴇᴀᴄᴛɪᴏɴ Bᴏᴛ Hᴀs Bᴇᴇɴ Esᴛᴀʙʟɪsʜᴇᴅ Sᴜᴄᴄᴇssғᴜʟʟʏ, Pʟᴇᴀsᴇ Pʀᴏᴄᴇᴇᴅ Tᴏ Vᴇʀɪғʏ Iᴛs Fᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ Aɴᴅ Eɴsᴜʀᴇ Iᴛ Is Oᴘᴇʀᴀᴛɪɴɢ Cᴏʀʀᴇᴄᴛʟʏ.</>`
  Api.editMessageText({
    message_id: mm,
    text: tto,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "⚙ Oᴘᴇɴ Bᴏᴛ Sᴇᴛᴛɪɴɢs", callback_data: "/botHub " + username }],
        [
          { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })

  Api.sendMessage({
    chat_id: adm,
    text: `*🤖 Nᴇᴡ Bᴏᴛ Cᴏɴɴᴇᴄᴛᴇᴅ | @${username}*`,
    parse_mode: "Markdown"
  })

  var json4 = {
    username: username,
    time: time,
    token: token,
    admin: user.telegramid
  }
  Bot.setProperty("status?" + username, "On")
  var ary = Bot.getProperty("MyBotLists" + user.telegramid)
  var arr = ary ? ary : []
  var okjs = { name: username }
  arr.push(okjs)
  Bot.setProperty("MyBotLists" + user.telegramid, arr, "json")

  Bot.setProperty("advertisement" + username, "On")
  Bot.setProperty(
    "Welcomemsg" + username,
    `Hᴇʟʟᴏ!\n\nYᴏᴜ Cᴀɴ Cᴏɴᴛᴀᴄᴛ Us Usɪɴɢ Tʜɪs Bᴏᴛ.\n\nTʜɪs Bᴏᴛ Wᴀs Mᴀᴅᴇ Usɪɴɢ @${bot.name}`
  )
  Bot.setProperty("Bot+" + username, json4, "json")

  bbbot.add(1)
  cn.add(1)
} else {
  Api.editMessageText({
    message_id: mm,
    text: "❌ *Iɴᴠᴀʟɪᴅ Bᴏᴛ Tᴏᴋᴇɴ. Pʟᴇᴀsᴇ Tʀʏ Aɢᴀɪɴ.*",
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
}

