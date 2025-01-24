/*CMD
  command: /accept
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 5572081489
if (user.telegramid == admin) {
  let msg = params
  User.setProperty("editid", msg, "integer")
  let tgid = User.getProperty("editid")
  let bal = Libs.ResourcesLib.anotherUserRes("balance", tgid)

  Bot.sendMessage("*🆔 Usᴇʀ Iᴅ:* " + tgid + " \n\n💰 Bᴀʟᴀɴᴄᴇ: " + bal.value())
  Bot.sendMessage("*Sᴇɴᴅ Mᴇ Aᴍᴏᴜɴᴛ Tᴏ Aᴅᴅ Tᴏ Usᴇʀ's Bᴀʟᴀɴᴄᴇ*")

  Bot.runCommand("/accepted")
} else {
  Bot.sendMessage(" ")
}

