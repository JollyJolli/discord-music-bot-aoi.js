module.exports = {
  name: "loop",
  aliases: "repetir",
  description: "Hacer que la fila de reproducion se repita infinitamente!",
  usage: "{prefix}loop", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "no",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $replaceText[$replaceText[$checkCondition[$loopQueue==true];true;**La reproducción automatica ha sido activada**];false;**La reproducción automatica ha sido desactivada**]
  $onlyIf[$queueLength!=0;No hay musica en el queue, no puedes ejecutar este comando por eso mismo.]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `, ////  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
}