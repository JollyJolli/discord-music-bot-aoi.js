module.exports = {
  name: "status",
  description: "Te muestro datos sobre la reproduccion actual y sobre la fila de reproduccion!",
  usage: "{prefix}status", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
$author[El queue cuenta con $queueLength canciones!;$authorAvatar]
$description[**Cancion Actual**:[$songInfo[title]]($songInfo[url])]
$addField[Canciones Totales en el queue:;$queueLength;yes]
$addField[Estatus:;$queueStatus;yes]
$addField[Cancion Pedida Por:;<@!$songInfo[userID]>;yes]
$addField[Artista:;[$songInfo[publisher]]($songInfo[publisher_url]);yes]
$addField[Artista Link:;\`$songInfo[publisher_url]\`;yes]
$addField[Link Cancion:;$songInfo[url];yes]
$addField[Estoy en un canal de voz con:;$usersInChannel[$voiceID[$clientID];username;, ];no]
$color[$getVar[verde]]
$addField[Canciones Escuchadas:;$getServerVar[Escuchadas]\n||Se reinicia cada que termina el queue||]
  $onlyIf[$queueLength!=0;No hay musica en el queue, no puedes ejecutar este comando por eso mismo.]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]

  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `, ////  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
}
