module.exports = {
  name: "reload",
  aliases: ["update","r"],
  description: "Reiniciar el bot sin reiniciar....",
  usage: "{prefix}r", /// () = Obligatorio | <> = Opcional 
  perms: "Bot Developer",
  cooldown: "0s",
  Emblemado: "no",
  Categoria: "Bot Owner",
  nonPrefixed: false,
  code: `
  $updateCommands
  $reply[$messageID;Dueño hermoso, ya reinicie los comandos.\nTe quiero 🥺❤;yes]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  $onlyForIDs[$botOwnerID[;];Solo mi developer puede usar este comando!]
  `,
}
