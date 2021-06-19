module.exports = {
  name: "skip",
  description: "saltar la cancion actual.",
  usage: "{prefix}skip <Numero en el queue>", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "3s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $if[$argsCount>=1]
  $skipTo[$message[1]] Ahora estamos en la cancion $message[1]!
  $onlyIf[$isNumber[$message]==true;Eso no es un numero!]
  $onlyIf[$message[1]<$queueLength;La fila de reproduccion tiene \`$queueLength\`, intentaste poner \`$message\` ]
  $else
  $skipSong **Cancion saltada!**
$endIf  
$onlyIf[$queueLength!=0;No hay musica en el queue, no puedes ejecutar este comando por eso mismo.]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
$cooldown[3s;Este comando tiene 10s de cooldown, debes esperar: \`$replaceText[%time%;Seconds;segundos]\`]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}
