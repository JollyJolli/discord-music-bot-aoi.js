module.exports = {
  name: "grab",
  description: "Guardar la cancion en dm.",
  usage: "{prefix}", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $sendDM[$authorID;
  {author:Cancion Guardada!:$authorAvatar}
  {title:$songInfo[title]}
  {field:#COLON#hourglass#COLON# Duración#COLON#:$songInfo[duration]:yes}
  {field:#COLON#musical_note#COLON# Autor:[$songInfo[publisher]]($songInfo[publisher_url])}
  {field:🔀 Link:\`$songInfo[url]\`:yes}
  {footer:$username$discriminator | $serverName:$authorAvatar}
  {color:$getVar[verde]}
  {thumbnail:$songInfo[thumbnail]}
  ] 
  $reply[$messageID;{author:Checa DM!:$authorAvatar}{color:$getVar[azul]};yes]
  $onlyIf[$isUserDMEnabled==true;{author:No tienes el DM abierto!:$authorAvatar}{color:$getVar[rojo]}]
  $onlyIf[$queueLength!=0;No hay musica en el queue, no puedes ejecutar este comando por eso mismo.]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}
