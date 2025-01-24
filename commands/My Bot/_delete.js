/*CMD
  command: /delete
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

var b = params
var del = b
var mm = User.getProperty("mmm")
function defineRow(ind) {
  if (ind < 1) {
    return 0
  }
  if (ind < 2) {
    return 1
  }
  if (ind < 3) {
    return 2
  }
  if (ind < 4) {
    return 3
  }
}

function shuffleDelBtn(arra1) {
  var ctr = arra1.length,
    temp,
    index
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr)
    ctr--
    temp = arra1[ctr]
    arra1[ctr] = arra1[index]
    arra1[index] = temp
  }
  return arra1
}
var arrayOfBut = ["Yᴇs, Dᴇʟᴇᴛᴇ Tʜᴇ Bᴏᴛ", "Nᴏᴘᴇ, Nᴇᴠᴇʀᴍɪɴᴅ", "No"]
var arrayOfBtn = shuffleDelBtn(arrayOfBut)
var inlKeyboard = [[], [], [], []]
for (var index in arrayOfBtn) {
  if (arrayOfBtn[index] == "Yᴇs, Dᴇʟᴇᴛᴇ Tʜᴇ Bᴏᴛ") {
    inlKeyboard[defineRow(index)].push({
      text: arrayOfBtn[index],
      callback_data: "/deleted " + b
    })
  } else {
    inlKeyboard[defineRow(index)].push({
      text: arrayOfBtn[index],
      callback_data: "/botHub " + b
    })
  }
  var ind = defineRow(index) + 1
}
inlKeyboard[ind].push(
  { text: "◁ Bᴀᴄᴋ ", callback_data: "/mybot" }, // "/botHub" + del },
  { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
)

var cap = `👮 Yᴏᴜ Aʀᴇ Aʙᴏᴜᴛ Tᴏ Rᴇᴍᴏᴠᴇ Yᴏᴜʀ Bᴏᴛ 
<b>@${b}</b> Fʀᴏᴍ Hᴇʀᴇ. Is Tʜᴀᴛ Cᴏʀʀᴇᴄᴛ?`

Api.editMessageText({
  message_id: mm,
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlKeyboard }
})

