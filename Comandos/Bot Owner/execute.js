module.exports = {
    name: "execute",
    aliases: ["exec","ex"],
    description: "Usar un comando en la consola del bot.",
    usage: "{prefix}exec (Contenido)", /// () = Obligatorio | <> = Opcional 
    perms: "Bot Developer",
    cooldown: "0s",
    Emblemado: "no",
    Categoria: "Bot Owner",
    nonPrefixed: false,
    code: `
    \`\`\`js
    $exec[$message]\`\`\`
    $argsCheck[>1;Dueño hermoso, no escribiste nada 🥺]
    $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
    $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
    $onlyForIDs[$botOwnerID[;];Solo mi developer puede usar este comando!]
    `,
  }
  