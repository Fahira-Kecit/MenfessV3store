
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam) => {
return`━━━❲ 𝙂𝙐𝙍𝘽𝙊𝙏-𝙈𝘿 ❳━━━
┏━━━━━━━━━━━━━
┣━❲ 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}kali 1 2
┃▢ ${prefix}bagi 1 2
┃▢ ${prefix}kurang 1 2
┃▢ ${prefix}tambah 1 2
┃▢ ${prefix}dellist key
┃▢ ${prefix}addlist key@response
┃▢ ${prefix}update key@response
┃▢ ${prefix}done <reply orderan>
┃▢ ${prefix}proses <reply orderan>
┃▢ ${prefix}list <only group>
┣━━━━━━━━━━━━━━
┣━❲ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}delete
┃▢ ${prefix}hidetag
┃▢ ${prefix}setppgrup
┃▢ ${prefix}setnamegrup
┃▢ ${prefix}group open
┃▢ ${prefix}group close
┃▢ ${prefix}antilink on
┃▢ ${prefix}antilink off
┃▢ ${prefix}welcome on
┃▢ ${prefix}welcome off
┃▢ ${prefix}kick @tag
┃▢ ${prefix}demote @tag
┃▢ ${prefix}promote @tag
┗━━━━━━━━━━━━`
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Ovo*
Number: 085789004732
A/N: LEXXY STORE

*Payment Dana*
Number: 085789004732
A/N: LEXXY OFFICIAL

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Lexxy Official
 • *Umur:* 18 tahun
 • *Hoby:* Turu/Game
 • *Askot:* Palembang
 • *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 083834558105
 • *Youtube:* Lexxy Official
 • *Github:* Lexxy24
 `
}
