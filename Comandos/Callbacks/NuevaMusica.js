module.exports = {
      type: 'musicStartCommand',
      channel: "$channelID",
      code: `
$sendMessage[{author:Nueva canción!:$userAvatar[$songInfo[userID]]}
{description:**Titulo**\n[$songInfo[title]]($songInfo[url])}
{field:Pedida Por:<@!$songInfo[userID]>:yes}
{field:Duracion:$replaceText[$songInfo[duration];Seconds;Segundos]:yes}
{field:Artista:$songInfo[publisher]:yes}
{field:Canciones Escuchadas:$getServerVar[Escuchadas]}
{color:$getVar[verde]}
{thumbnail:$songInfo[thumbnail]};no]

$setServerVar[Escuchadas;$sum[$getServerVar[Escuchadas];1]]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal! Pero igual ya se cambio de musica!]
` 
}
/*
$author[Nueva canción!;$userAvatar[$songInfo[userID]]]
$description[**Titulo**\n[$songInfo[title]]($songInfo[url])]
$addField[Pedida Por;<@!$songInfo[userID]>;yes]
$addField[Duracion;$replaceText[$songInfo[duration];Seconds;Segundos];yes]
$addField[Artista;$songInfo[publisher];yes]
$addField[Canciones Escuchadas:;$getServerVar[Escuchadas]]
$color[$getVar[verde]]
$thumbnail[$songInfo[thumbnail]]

*/