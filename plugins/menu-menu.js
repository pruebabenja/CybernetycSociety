import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `     ┣ *𝑴𝑬𝑵𝑼 𝑯𝒀𝑷𝑬𝑹𝑿* ┫
┏━━━━━━━━━━━━━━━━┓
┣ *𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍* ┫
┣ﾠﾠ*𝐂𝐘𝐁𝐄𝐑𝐍𝐄𝐓𝐈𝐂*ﾠﾠ┫
┣ﾠﾠﾠﾠ*𝐒𝐎𝐂𝐈𝐄𝐓𝐘*ﾠﾠﾠﾠ┫
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┣ *🧾𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐒*
┣ﾠﾠ\`\`\`${rtotalreg}/${totalreg}\`\`\`
┣ﾠ*⌛𝐓𝐈𝐄𝐌𝐏𝐎 𝐀𝐂𝐓𝐈𝐕𝐎*
┣ﾠ\`\`\`${uptime}\`\`\`
┣ﾠ*⚙𝐌𝐎𝐃𝐎*
┣ﾠPublico
┣ﾠ*🔒𝐂𝐇𝐀𝐓𝐒 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎𝐒*
┣ﾠ\`\`\`${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}\`\`\`
┣ﾠ*🔒𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎𝐒*
┣ﾠ\`\`\`${Object.entries(global.db.data.users).filter(user => user[1].banned).length}\`\`\`
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🚀𝑬𝒍 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆𝒏 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓𝒇𝒂𝒗𝒐𝒓 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 .𝒐𝒘𝒏𝒆𝒓 𝒚 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menu|menú|memu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
