module.exports = {
  name: "invite",
  description: "Obtener la invite para meter el bot a tu server.",
  usage: "{prefix}invite", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "no",
  Categoria: "Utilidad",
  nonPrefixed: false,
  code: `
  https://discord.com/oauth2/authorize?client_id=852297273311756309&scope=bot&permissions=5435682752
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}