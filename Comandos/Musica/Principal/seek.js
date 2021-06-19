module.exports = {
  name: "seek",
  aliases: ["seekTo"],
  description: "Salta a un segundo de la cancion!",
  usage: "{prefix}seek (Segundo)", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "5s (Global)",
  Emblemado: "no",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $seekTo[$message] **Musica va en un nuevo segundo!**
  $argsCheck[>1;Cuantos segundos adelantamos?]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  $serverCooldown[5s;Este comando cuenta con 5s de cooldown, esperate un poco :D]
  `,
}
