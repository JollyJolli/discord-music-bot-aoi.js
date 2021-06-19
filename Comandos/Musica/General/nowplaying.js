module.exports = {
  name: "np",
  aliases: ["nowplaying" , "now-p" , "n-playing"],
  description: "Informacion de la cancion actual!",
  usage: "{prefix}np", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $reply[$messageID;{author:$username:$authorAvatar}
  {description:[$songInfo[title]]($songInfo[url])}
  {field:Duracion#COLON#:$songInfo[duration]:yes}
  {field:Duracion Restante#COLON#:$songInfo[duration_left]:yes}
  {field:Usuario que pidio la cancion#COLON#:<@$songInfo[userID]>:no}
  {field:Artista#COLON#:[$songInfo[publisher]]($songInfo[publisher_url]):no};yes]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
    $onlyIf[$queueLength!=0;No hay musica, no puedes ejecutar este comando por eso mismo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}
