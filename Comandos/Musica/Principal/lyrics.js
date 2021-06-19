module.exports = {
  name: "lyrics",
  aliases: ["l","ly","lyric","letra"],
  description: "Obten la letra de la cancion actual.",
  usage: "{prefix}ly", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Music",
  nonPrefixed: false,
  code: `
  $author[$username;$authorAvatar]
  $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ;-];lyrics]]
  $footer[$songInfo[title] ~ Letra;$authorAvatar]
  $color[$getVar[Verde]]
$deletecommand
  $sendMessage[{author:Aveses el comando no se envia porque la letra es muy larga. Pido perdon:$authorAvatar}{color:$getVar[rojo]}{delete:3s};no]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}
