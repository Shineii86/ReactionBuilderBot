/*CMD
  command: !
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

try {
  // Your BJS Code Here
} catch (error) {
  Bot.sendMessage(error)
}

var name =
  "<a href='tg://user?id=" + user.telegramid + "'>" + user.first_name + "</a>"
var caption = `<blockquote><b>Bᴏᴛ Eʀʀᴏʀ</b>
Aɴ Eʀʀᴏʀ Oᴄᴄᴜʀʀᴇᴅ Wʜɪʟᴇ Pʀᴏᴄᴇssɪɴɢ Yᴏᴜʀ Rᴇҩᴜᴇsᴛ. Pʟᴇᴀsᴇ Rᴇsᴛᴀʀᴛ Tʜᴇ Bᴏᴛ Bʏ Usɪɴɢ /restart Aɴᴅ Rᴇᴘᴏʀᴛ Tʜɪs Issᴜᴇ Tᴏ Tʜᴇ Dᴇᴠᴇʟᴏᴘᴇʀ.</blockquote>`

var button = [
  [
    { text: "🥷 Dᴇvᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" },
    { text: "Sᴜᴘᴘᴏʀᴛ 💬", url: "t.me/MaximXGroup" }
  ],
  [{ text: "Cʟᴏsᴇ", callback_data: "/close" }]
]

if (request.message_id) {
  Api.sendMessage({
    text: caption,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: button
    }
  })
}

