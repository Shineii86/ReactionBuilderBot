/*CMD
  command: /sendBot
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
  text:
    "*Pʟᴇᴀsᴇ Eɴᴛᴇʀ Yᴏᴜʀ Bᴏᴛs Bᴜsɪɴᴇss Eᴍᴀɪʟ Tᴏ Tʀᴀɴsғᴇʀ Tʜᴇ Bᴏᴛ Tᴏ Yᴏᴜʀ Aᴄᴄᴏᴜɴᴛ*",
  parse_mode: "markdown",
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
Bot.runCommand("/botSend")

