/*CMD
  command: /botHub
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

var mm = User.getProperty("mmm")
var p = params
var bt = Bot.getProperty("Bot+" + p)
var name = bt.username
var tim = bt.time
var tokn = bt.token
var st = Bot.getProperty("status?" + name)

var stt = st == "On" ? "⏹️ Dᴇᴀᴄᴛɪᴠᴀᴛᴇ" : "▶️ Aᴄᴛɪᴠᴇ"
var sttt = st == "On" ? "Rᴜɴɴɪɴɢ 🚀" : "Sᴛᴏᴘ ⛔"

var txt
if (!bt) {
  txt = "<b>🤖 Tʜɪs Bᴏᴛ Nᴏᴛ Fᴏᴜɴᴅ Iɴ Dᴀᴛᴀʙᴀsᴇ</>"
} else {
  txt =
    "🤖<b> Bᴏᴛ: @" +
    name +
    "\n\n⏱ Cʀᴇᴀᴛᴇᴅ Aᴛ:</> <code>" +
    tim +
    "</>\n\n🎯 <b>Tᴏᴋᴇɴ:</> <code>" +
    tokn +
    "</>\n\n🤖 <b>Sᴛᴀᴛᴜs:</> " +
    sttt
}

// Inline keyboard construction
var inlkey = [
  [
    { text: stt, callback_data: `/status ${name}` },
    { text: "Dᴇʟᴇᴛᴇ 🗑", callback_data: `/delete ${name}` }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/mybot" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

// Edit the message
Api.editMessageText({
  message_id: mm,
  text: txt,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
})

