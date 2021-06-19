module.exports = {
  name: "eval",
  aliases: ["e"],
  description: "Evaluar un contenido escrito en la api.",
  usage: "{prefix}eval (Contenido)", /// () = Obligatorio | <> = Opcional 
  perms: "Bot Developer",
  cooldown: "0s",
  Emblemado: "no",
  Categoria: "Bot Owner",
  nonPrefixed: false,
  code: `
  $eval[$message]
  $argsCheck[>1;Dueño hermoso, no escribiste nada 🥺]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  $onlyForIDs[$botOwnerID[;];Solo mi developer puede usar este comando!]
  `,
}
