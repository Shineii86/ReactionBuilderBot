/*CMD
  command: /statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /hentai
  group: 
CMD*/

if (chat.chat_type != "private") {
  Bot.sendMessage("[Write me in private](https://t.me/" + bot.name + ")", {
    disable_web_page_preview: true
  })
  return
}

var status = Libs.ResourcesLib.anotherChatRes("totalusers", "global").value()
var dl = Libs.ResourcesLib.anotherChatRes("totaldele", "global").value()
var cn = Libs.ResourcesLib.anotherChatRes("connected", "global").value()

// Get date and time for Asia/Kolkata (IST) and Asia/Dubai (GST)
let istTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata"
})
let gstTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Dubai"
})

var dt_ist = Libs.DateTimeFormat.format(istTime, "dd/mm/yyyy")
var tm_ist = Libs.DateTimeFormat.format(istTime, "h:MM:ss T")
var dxy_ist = Libs.DateTimeFormat.format(istTime, " dddd")
/*
var dt_gst = Libs.DateTimeFormat.format(gstTime, "dd/mm/yyyy")
var tm_gst = Libs.DateTimeFormat.format(gstTime, "h:MM:ss T")
var dxy_gst = Libs.DateTimeFormat.format(gstTime, " dddd")
*/
var chartPhoto = `https://quickchart.io/chart?bkg=pink&c={type:%27bar%27,data:{labels:[%27@${bot.name}%27],datasets:[{label:%27Tᴏᴛᴀʟ+Usᴇʀs%27,data:[${status}]},{label:%27Tᴏᴛᴀʟ+Dᴇʟᴇᴛɪᴏɴs%27,data:[${dl}]},{label:%27Tᴏᴛᴀʟ+Cᴏɴɴᴇᴄᴛᴇᴅ%27,data:[${cn}]}]}}`
/*"https://quickchart.io/chart?bkg=pink&c={type:%27bar%27,data:{labels:[%27" +
  bot.name +
  "%27],datasets:[{label:%27Tᴏᴛᴀʟ+Usᴇʀs%27,data:[" +
  status +
  "]},{label:%27Tᴏᴛᴀʟ+Dᴇʟᴇᴛɪᴏɴs%27,data:[" +
  dl +
  "]},{label:%27Tᴏᴛᴀʟ+Cᴏɴɴᴇᴄᴛᴇᴅ+Bᴏᴛs%27,data:[" +
  cn}
  "]}]}}"*/

var chartMessage = `
<b>📊 Bᴏᴛ Lɪᴠᴇ Sᴛᴀᴛɪsᴛɪᴄs</>
<b>» Tᴏᴛᴀʟ Usᴇʀs:</> ${status}
<b>» Tᴏᴛᴀʟ Dᴇʟᴇᴛɪᴏɴs:</> ${dl}
<b>» Tᴏᴛᴀʟ Cᴏɴɴᴇᴄᴛᴇᴅ Bᴏᴛs:</> ${cn}

<b>🇮🇳 Dᴀᴛᴀ Fᴏʀ: Tᴏᴅᴀʏ (Isᴛ)</>
<b>» Dᴀᴛᴇ:</> ${dt_ist}
<b>» Tɪᴍᴇ:</> ${tm_ist}ᴍ
<b>» Dᴀʏ:</> ${dxy_ist}`

// <b>🌏 Dᴀᴛᴇ Fᴏʀ: Tᴏᴅᴀʏ (Gsᴛ)</>
// <b>» Dᴀᴛᴇ:</> ${dt_gst}
// <b>» Tɪᴍᴇ:</> ${tm_gst}
// <b>» Dᴀʏ:</> ${dxy_gst}

var button = [
  [
    { text: "Rᴇғʀᴇsʜ", callback_data: "/statistics" },
    { text: "Cʟᴏsᴇ", callback_data: "/close" }
  ]
]
// Send or edit the message with the chart
if (request.message && request.message.message_id) {
  Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: chartPhoto,
      caption: chartMessage,
      parse_mode: "HTML",
      protect_content: true
    },
    reply_markup: { inline_keyboard: button }
  })
} else {
  Api.sendPhoto({
    chat_id: request.chat ? request.chat.id : chat.id,
    photo: chartPhoto,
    caption: chartMessage,
    parse_mode: "HTML",
    protect_content: true,
    reply_markup: { inline_keyboard: button }
  })
}

