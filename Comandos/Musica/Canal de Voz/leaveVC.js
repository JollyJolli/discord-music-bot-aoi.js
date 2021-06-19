module.exports = {
  name: "leaveVC",
  description: "Me voy de tu canal de voz",
  usage: "{prefix}leaveVC", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $leaveVC $description[Me fui de <#$voiceID>] $color[$getVar[Verde]]
  $onlyIf[$voiceID[$clientID]!=;No estoy en un canal de voz!]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
    $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `, ////  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
}