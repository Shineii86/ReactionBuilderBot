/*CMD
  command: /deleteafter5
  help: 
  need_reply: false
  auto_retry_time: 
  folder: stickers

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (options) {
  const { message_id } = options.result // Get the message ID of the sent sticker
  Bot.run({
    command: "/deletesticker",
    options: { message_id: message_id },
    run_after: 5 // Run this command after 5 seconds
  })
}

