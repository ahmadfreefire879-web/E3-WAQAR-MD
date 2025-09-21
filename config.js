const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUk1MktjbXpqSDBBZ1NLekV4VnErazI0VXF3bHp0STI0TExnTzBYVTJGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFRwbmt3THdNemRWQ1l2eUIwdGFmNmVFcEpTcDE1bVpxZXRVMWQwVXpIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUDBhV0pmOTVlaUEzTlB0V08rcXV0SWU1UUNOWDdYcHZZclNRQlJaZEhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpdFRFNFlJV0RKVENtbXRqWHBJTTJGZXVtSkRXSncvOFdiMlNQZ0hiRmdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQbUFZaDFuZkFsTHF4TzVYbGk0cXZZVk1zVXZoTmJyNUltc1NXNzIyR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFzaDhtTjhJZ1JBMytzbTdpTWI1dHQxYUVlT0I2UDkySm55NTNLaWlmenM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JnT0l2WElEVDU5cDNiVEtQdXZWRGgzTGtzcWdxaGQ0VG5pYnpkRVdsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1A0aWxUdWlEbzQ4dmlsRExPWndYNEQwZlFMOXR1UzQzOFh2UDRuZTQyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhCdmU1WVFaYm8yUUtHaW9RamdHQjJNOW02OEpzcHlDNXJpcHBCMURUUEdXRzRvNnpadTEzaDd0ck11dnZJNU9kNlhsUjBvNy9BMDU4dTNVR2Z1Q0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IndOT25tRnZZTXlWRGk5Y1pLVGNrZ1poWlRNZ3dNTnZFUFVWdDhWbTJwN1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTk1NTk5MDM5OTM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1M0E3QTlDQTAxRjBGNDQ5NDZBMjJCQTU0QzcxRkZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg0MzA4MDF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk5NTU5OTAzOTkzOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTdCMTkyOUE0QTE5ODg2OEQ0MzcyNjVDQjI1NkZFRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDMwODAxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTU1OTkwMzk5MzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU1QTdDQzBEOTY1QkEzMTI5M0Q5QkEyMjg2QjQ2RTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODQzMDgwM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRzY0UkxBOEUiLCJtZSI6eyJpZCI6Ijk5NTU5OTAzOTkzOTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnin6og8J2QiPCdkK3wnZCsIPCdkIfwnZCA8J2QkfCdkJHwnZCYIOKfq/CThqoiLCJsaWQiOiI0NjM1MjAwODUzMjIxNjo0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFQ5dW5nUXpZeSt4Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid2x3R0Y3ZVdtVkx3WmZFY1NkSFZnVTFkbVRuN3NPOTBZd25OVnVPUEMzUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNHVzeGtPQUtwZEE4aUgzbDlDS2JiWVpsT1l0U0hCQ0pmTEZCd2dLamx6eU44OHkxYU1qYzZvclVieTBlOVRqVVA3TkN5MituNXNTTHo5Si9SUmllQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlFwT3grQU9yaG5OVXRScVM0RFoxT3Bkd1A2ZTh6THR6aHNJV2EvWlBVbld5MmlUTVRWYVdmeUM3RUl0azc3dUtxY1o0Sng3d3ppZjNvL3ViTXZMQkF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTk1NTk5MDM5OTM5OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0pjQmhlM2xwbFM4R1h4SEVuUjFZRk5YWms1KzdEdmRHTUp6VmJqand0MCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NDMwODAwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtSNCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-AHMII♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yoie7u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3-WAQAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3-WAQAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-WAQAR-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-WAQAR-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yoie7u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
