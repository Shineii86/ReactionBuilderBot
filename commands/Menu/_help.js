/*CMD
  command: /help
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

// Bot Advertising
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]
var randomAd = ads[Math.floor(Math.random() * ads.length)]

// Help Message
var cap = `<b>📚 Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ - Hᴇʟᴘ Gᴜɪᴅᴇ</>

Wᴇʟᴄᴏᴍᴇ Tᴏ Tʜᴇ Aᴅs Rᴇᴀᴄᴛɪᴏɴ Bᴏᴛ! Tʜɪs Bᴏᴛ Aᴜᴛᴏᴍᴀᴛɪᴄᴀʟʟʏ Rᴇᴀᴄᴛs Tᴏ Mᴇssᴀɢᴇs Aɴᴅ Pᴏsᴛs Iɴ Yᴏᴜʀ Cʜᴀɴɴᴇʟ & Gʀᴏᴜᴘ.

Tᴏ Cʀᴇᴀᴛᴇ Yᴏᴜʀ Oᴡɴ Cᴜsᴛᴏᴍ Bᴏᴛ Lɪᴋᴇ Tʜɪs, Sɪᴍᴘʟʏ Usᴇ Tʜᴇ <code>/addbot</> Cᴏᴍᴍᴀɴᴅ, Aᴅᴅ Yᴏᴜʀ Bᴏᴛ Tᴏᴋᴇɴ, Aɴᴅ Yᴏᴜʀ Pᴇʀsᴏɴᴀʟ Aᴜᴛᴏ-Rᴇᴀᴄᴛɪᴏɴ Bᴏᴛ Wɪʟʟ Bᴇ Rᴇᴀᴅʏ Tᴏ Gᴏ!

<b>⭐ Kᴇʏ Fᴇᴀᴛᴜʀᴇs:</>
- Sᴇᴀᴍʟᴇssʟʏ Aᴅᴅ Oʀ Rᴇᴍᴏᴠᴇ Bᴏᴛs
- Eғғᴏʀᴛʟᴇssʟʏ Aᴄᴛɪᴠᴀᴛᴇ Oʀ Dᴇᴀᴄᴛɪᴠᴀᴛᴇ Bᴏᴛs
- Cʀᴇᴀᴛᴇ Uᴘ Tᴏ 30 Bᴏᴛs Eғғᴏʀᴛʟᴇssʟʏ <b>[Pᴀɪᴅ]</>
- Gᴇᴛ 5 Bᴏᴛs Fᴏʀ Fʀᴇᴇ As A Sᴛᴀʀᴛᴇʀ Pᴀᴄᴋ <b>[Fʀᴇᴇ]</>
- Cᴏᴍᴘᴀᴛɪʙʟᴇ Wɪᴛʜ Bᴏᴛʜ Cʜᴀɴɴᴇʟs Aɴᴅ Gʀᴏᴜᴘs

<b>🚀 Iғ Yᴏᴜ Fɪɴᴅ Tʜɪs Bᴏᴛ Usᴇғᴜʟ, Bᴇ Sᴜʀᴇ Tᴏ Exᴘʟᴏʀᴇ Oᴜʀ Oᴛʜᴇʀ Bᴏᴛs Bʏ Vɪsɪᴛɪɴɢ <a href='t.me/QuinxNetwork/32'>Mᴀxɪᴍ 𝕏 Bᴏᴛs.</a></>

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

Api.editMessageText({
  message_id: User.getProperty("mmm"),
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})

