module.exports = {
  name: "queue",
  description: "Te mostrara la fila de reproduccion!",
  usage: "{prefix}queue", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $reply[$messageID;{author:Fila de Reproduccion!:$authorAvatar}
  {field:Cancion Actual#COLON#:[$songInfo[title]]($songInfo[url])}
{field:Queue#COLON#:$queue[1;10;{number}.- [{title}]({url}) | <@{userID}>]}
{thumbnail:$songInfo[thumbnail]}
{color:$getVar[azul]}
{footer:Solo se muestran las primeras 10:$authorAvatar};yes]
$onlyIf[$queueLength!=0;No hay musica, no puedes ejecutar este comando por eso mismo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}
