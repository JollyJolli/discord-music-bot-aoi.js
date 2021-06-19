module.exports = {
  name: "prune-music",
  aliases: "prune",
  description: "Eliminar los mensajes anteriores de cuando iniciaba una musica nueva.",
  usage: "{prefix}prune", /// () = Obligatorio | <> = Opcional 
  perms: "kick",
  cooldown: "0s",
  Emblemado: "no",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  
  $replaceText[$replaceText[$checkCondition[$pruneMusic==true];true;**Ahora se borrara los mensajes de canciones nuevas al terminar de reproducir.**];false;**Ahora no se borrara los mensajes de canciones nuevas al terminar de reproducir.**]
$onlyPerms[kick;Ocupas permiso de "KICK" para poder usar este comando.]
  $onlyIf[$queueLength!=0;No hay musica en el queue, no puedes ejecutar este comando por eso mismo.]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `, ////  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
}