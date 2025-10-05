const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JUSktxcCsxWk5qOUU5d3pBcGg2RWUrVG9NTEhWaWV6ek5wR2hRNEtHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjdSaCtlclliT0pqaEVvTXVnaWViSkhveGpHazlVWFpObjg0U2s1VmYzQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRTc1MzhHVStWQmdHTTk2VFpnVE5SZlNWbXVYTWswZEtRNDdzcWQwelVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoTFk1VUVLOURaNDUyRUdZb1p3aGVkeEcwUi80VU5RZVU3OUNLUXdEMnpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1EcXlSUTQ1Y0M3R0o4SXE4WlMwdnJwd3p6c01XaXp1R2lzTHBXVFc1MUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktrU2gycXpiaEs0T0pMME56ZGdONzdWdHVUZUppYnFqNWJiS3NYNnUxRXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1B1RGYrY3VuVHFueXVteXE3QndPUVJ4dkx4MkpLYmp1eTlVdEhyQXlHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGlIT2FxR3VaR3Rpd2V5N2RXcDl5cUtObzBielJpK3BpdzRaYmVSSHZUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRzSEJvZnNrYmI4V2JWaHdIOTlmRjVwUmc3LzAzRWxJdGcrb3ZLSHBudi9BUElrVnp4NzYxZ01xRHNvOVh4dVc4ZEVRakl5eldPd01hczNjdlIwN0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJUbkVPaUNkZmRPNmtGZFRDR0VvWlFQanUrVnl6bm5jeWdId0hxRWVvUk5BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQzNzYzMDA0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzY2QzdFQTU5NzgyQzAwODFENzBEQzhFODY0RkFFRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NjU2MDEyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0Mzc2MzAwNDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDMjY1NTExMzAzMjgzNjI3MjA1MDYxNDFEM0JDQjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTY1NjAxMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDM3NjMwMDQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQTkwMjY1RjE1NTZCMzg0MjUzOTg3QkE2MzM0NjhBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk2NTYwMTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik4zSkxKVlJaIiwibWUiOnsiaWQiOiI5MjM0Mzc2MzAwNDY6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1NjIyOTk4OTA4MTE5NDoxQGxpZCIsIm5hbWUiOiJIeSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGI0bnVvQ0VNYndpTWNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZFV6dCtNY2E3ckFlZSt5K1NjMFNjejVIMzRTd09mL0k4OG1xSWtjK3FDVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRkVSZFpvM0VuR0RmeFNXOGxvUTZKTTJCK2grWHVpSHdqM2tCeXp1T0NSL2xkNjlEcDNOYjhpZmJJNks2M1hBTjRpQWI0L2RpcC9hR0x2THBZYWV4QWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im1IYnQ1TnNCNUtSWEpRcStPUFhqTWdDWUtDb3BlVTdvNUF1NVJnQWt3WnB1VDNWcis4ZkZNSHN4WmhZdVY1TXlzWlVPSzgrbUxIbmtXaC9HOHd4a0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDM3NjMwMDQ2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFZNN2ZqSEd1NndIbnZzdmtuTkVuTStSOStFc0RuL3lQUEpxaUpIUHFnbCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NjU2MDA5LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxWMiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
