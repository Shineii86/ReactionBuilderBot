/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🧑‍💻 Wᴇʟᴄᴏᴍᴇ Tᴏ Ҩᴜɪɴx ᴄPᴀɴᴇʟ",
  show_alert: false
})

var mm = User.getProperty("adminid")
var adm = Bot.getProperty("adminID")
var inl = [
  [{ text: "⚙ Sᴇᴛ Bʙ Aᴘɪ", callback_data: "/setapi" }],
  [
    { text: "🔒 Bᴀɴ", callback_data: "/ban" },
    { text: "Uɴʙᴀɴ 🔒", callback_data: "/unban" }
  ],
  [{ text: "📢 Bʀᴏᴀᴅᴄᴀsᴛ", callback_data: "/broadcast" }],
  [
    { text: "🔍 Fɪɴᴅ Bᴏᴛ", callback_data: "/findBot" },
    { text: "Sᴇɴᴅ Bᴏᴛ 📤", callback_data: "/sendBot" }
  ],
  [{ text: "Lᴏɢᴏᴜᴛ", callback_data: "/start" }]
]
if (adm == user.telegramid) {
  var tto =
    "👋 <b>Wᴇʟᴄᴏᴍᴇ, Tᴏ Ҩᴜɪɴx Aᴅᴍɪɴ ᴄPᴀɴᴇʟ Hᴇʀᴇ Yᴏᴜ Cᴀɴ Mᴀɴᴀɢᴇ Yᴏᴜʀ Bᴏᴛ Wɪᴛʜ ᴀ Sɪɴɢʟᴇ Oᴘᴛɪᴏɴs.</>\n\n<i>🚷 Hᴇʀᴇ Aʀᴇ Sᴏᴍᴇ Oᴘᴛɪᴏɴs Yᴏᴜ Nᴇᴇᴅ Tᴏ Sᴇᴛ Fᴏʀ Tʜɪs ʙᴏᴛ Eʟsᴇ Bᴏᴛ Wᴏɴ'ᴛ Wᴏʀᴋ Pʀᴏᴘᴇʀʟʏ.</>\n\n<b>🤖 Bᴏᴛ Nᴀᴍᴇ:</> @" +
    bot.name +
    "\n\n<tg-spoiler><i>Wᴀʀɴɪɴɢ Wʜᴇɴ Usɪɴɢ Tʜɪs Pᴀɴᴇʟ Pʟᴇᴀsᴇ Dᴏɴ'ᴛ Sᴇɴᴅ Aɴʏ Oᴛʜᴇʀ Cᴏᴍᴍᴀɴᴅ Oʀ Iᴛ Mᴀʏ Sᴘᴏɪʟ Yᴏᴜʀ Wᴏʀᴋ</></tg-spoiler>"
  if (request.message_id) {
    Api.deleteMessage({ chat_id: chat.chatid, message_id: mm })
    Api.sendMessage({
      text: tto,
      parse_mode: "HTML",
      on_result: "adminid",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: inl }
    })
    return
  }
  Api.editMessageText({
    message_id: User.getProperty("mmm"),
    text: tto,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
  return
}

