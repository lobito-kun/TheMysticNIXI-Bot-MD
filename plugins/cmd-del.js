let handler = async (m, { conn, usedPrefix, text, command }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `✳️ Ingrese el nombre del comamdo`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw '✳️ No puedes borrar este comando'
    delete sticker[hash]
    m.reply(`✅ Comando eliminado`)
}


handler.help = ['delcmd']
handler.tags = ['database']
handler.command = ['delcmd']

export default handler