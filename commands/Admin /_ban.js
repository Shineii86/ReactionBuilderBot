/*CMD
  command: /ban
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

var mm = User.getProperty("adminid")
Api.editMessageText({
  message_id: mm,
  text: "<b>👮 Sᴇɴᴅ Usᴇʀ Tᴇʟᴇɢʀᴀᴍ Iᴅ</>",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "◁ Bᴀᴄᴋ ", callback_data: "/admin" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})
Bot.runCommand("/userBan")

