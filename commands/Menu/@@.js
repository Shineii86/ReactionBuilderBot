/*CMD
  command: @@
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

// 𝗖𝗵𝗲𝗰𝗸 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 𝗠𝗲𝗺𝗯𝗲𝗿 𝗦𝗵𝗶𝗽 𝗢𝗳 𝗨𝘀𝗲𝗿 𝗢𝗻 𝗦𝘁𝗮𝗿𝘁 𝗖𝗼𝗺𝗺𝗮𝗻𝗱
function isCheck(options) {
  // Check the status returned by Api.getChatMember
  var status = options.result.status
  const isJoined = status != "left" // User is considered joined if status is not "left"

  if (!isJoined) {
    // Channel Joined Alert Message
    const JoinedMSG = `<b>❗️𝗔𝗧𝗧𝗘𝗡𝗧𝗜𝗢𝗡</b>
𝖸𝗈𝗎 𝖠𝗋𝖾 𝖱𝖾𝖼𝖾𝗂𝗏𝗂𝗇𝗀 𝖳𝗁𝗂𝗌 𝖬𝖾𝗌𝗌𝖺𝗀𝖾 𝖡𝖾𝖼𝖺𝗎𝗌𝖾 𝖸𝗈𝗎 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖢𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾𝖽 𝖳𝗈 𝖳𝗁𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅𝗌: @MaximXSticker And @MaximXBots.

𝖨𝗍 𝖨𝗌 𝖨𝗆𝗉𝗈𝗋𝗍𝖺𝗇𝗍 𝖳𝗈 𝖲𝗍𝖺𝗒 𝖴𝗉-T𝗈-D𝖺𝗍𝖾 𝖶𝗂𝗍𝗁 𝖳𝗁𝖾 𝖫𝖺𝗍𝖾𝗌𝗍 𝖴𝗉𝖽𝖺𝗍𝖾𝗌 𝖠𝗇𝖽 𝖡𝖾 𝖠𝗐𝖺𝗋𝖾 𝖮𝖿 𝖳𝗁𝖾 𝖭𝖾𝗐 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇𝖺𝗅𝗂𝗍𝗂𝖾𝗌 𝖠𝗇𝖽 𝖥𝖾𝖺𝗍𝗎𝗋𝖾𝗌 𝖮𝖿𝖿𝖾𝗋𝖾𝖽 𝖡𝗒 𝖳𝗁𝖾 𝖡𝗋𝖺𝗇𝖽. 

𝖯𝗅𝖾𝖺𝗌𝖾 𝖩𝗈𝗂𝗇 𝖳𝗁𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅𝗌 𝖠𝗇𝖽 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 "𝗩𝗲𝗿𝗶𝗳𝘆 𝗠𝗲" 𝖡𝗎𝗍𝗍𝗈𝗇 𝖳𝗈 𝖢𝗈𝗆𝗉𝗅𝖾𝗍𝖾 𝖳𝗁𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇 𝖯𝗋𝗈𝖼𝖾𝗌𝗌.

ℹ️ 𝖳𝗁𝗂𝗌 𝖬𝖾𝗌𝗌𝖺𝗀𝖾 𝖶𝗂𝗅𝗅 𝖣𝗂𝗌𝖺𝗉𝗉𝖾𝖺𝗋 𝖮𝗇𝖼𝖾 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾𝖽 (𝖶𝗂𝗍𝗁𝗂𝗇 1 𝖬𝗂𝗇𝗎𝗍𝖾).`
    // Send a message if the user hasn't joined
    // Api.sendMessage({
    // chat_id: user.telegramid,
    // text: JoinedMSG,
    // parse_mode: "HTML"

    // Keyboard Buttons
    Api.editMessageText({
      message_id: User.getProperty("mmm"),
      text: JoinedMSG,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "⭐ Mᴀxɪᴍ 𝕏 Sᴛɪᴄᴋᴇʀ", url: "t.me/MaximXSticker" },
            { text: "Mᴀxɪᴍ 𝕏 Bᴏᴛs 🤖", url: "t.me/MaximXBots" }
          ],
          [{ text: "Vᴇʀɪғʏ Mᴇ", callback_data: "/verify" }],
          [
            { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
            { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
          ]
        ]
      }
    })
  }

  return
}

function isJoined(channel) {
  // Check if the user is a member of the given channel
  Api.getChatMember({
    chat_id: channel,
    user_id: user.telegramid,
    on_result: "@@" // Define a callback command
  })
}

// Callback function to process the result of
if (options) {
  isCheck(options)
  return
}

// Call the isJoined function with your channel name
isJoined("@MaximXBots")

