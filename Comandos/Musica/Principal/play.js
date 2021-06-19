module.exports = {
  name: "play",
  aliases: "p",
  description: "Reproduce una cancion!",
  usage: "{prefix}play (Cancion)", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $if[$checkContains[$message;open.spotify;spotify]==true]
  $sendMessage[{author:Cancion/Playlist encontrada en Spotify!:$authorAvatar}{description:$playSpotify[$message;yes]}{color:7EE5B8}{footer:Gracias por escuchar conmigo!:$userAvatar[$clientID]};no]
  $else
  $sendMessage[{author:Cancion encontrada en Youtube!:$authorAvatar}{description:$playSong[$message;5s;yes;yes;:x: Error al poner la musica en el queue!]}
{footer:Gracias por escuchar conmigo!:$userAvatar[$clientID]}
{color:FF8282};no]
$endif
$argsCheck[>1;Pon algo]  $onlyIf[$voiceID!=;No estas en un canal de voz!]
$onlyIf[$voiceID==$voiceID[$clientID];Invitame a tu canal de voz con "{prefix}joinVC".]
$suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}
