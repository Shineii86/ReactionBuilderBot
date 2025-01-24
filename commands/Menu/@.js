/*CMD
  command: @
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
/*var fullBotUsers = 
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
User.setProperty("already", user.telegramid, "text")}*/
//put this in start command on top
