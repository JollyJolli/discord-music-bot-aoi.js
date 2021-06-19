module.exports = {
    name: "clearqueue",
    aliases: ["c-q","clearq"],
    description: "Limpiar la fila de reproduccion.",
    usage: "{prefix}clearqueue", /// () = Obligatorio | <> = Opcional 
    perms: "All",
    cooldown: "0s",
    Emblemado: "Si",
    Categoria: "Musica",
    nonPrefixed: false,
    code: `
    $author[$username;$authorAvatar]
    $description[Queue limpia uwu] $color[$getVar[verde]]
    $clearSongQueue
    $onlyIf[$queueLength!=0;No hay musica, no puedes ejecutar este comando por eso mismo.]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
    $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
    $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
    
    `,
  }
