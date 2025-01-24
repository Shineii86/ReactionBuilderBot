/*CMD
  command: /botDelete
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var c = JSON.parse(content)
var id = c[0].id
var token = Bot.getProperty("BBAPI")
var b = User.getProperty("DeleteBot")
var mm = User.getProperty("mmm")
var dl = Libs.ResourcesLib.anotherChatRes("totaldele", "global")
HTTP.post({
  url: "https://api.bots.business/v1/bots/" + id + "/status?api_key=" + token,
  body: { status: "start_stopping" }
})
var inlKeyboard = [
  [
    { text: "◁ Bᴀᴄᴋ ", callback_data: "/mybot" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]
var cap = `🤯 @${b} <b>Hᴀs Bᴇᴇɴ Dᴇʟᴇᴛᴇᴅ Fʀᴏᴍ Sᴛᴏʀᴇ.</b>`
dl.add(1)
Api.editMessageText({
  message_id: mm,
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlKeyboard }
})

