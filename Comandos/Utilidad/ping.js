module.exports = {
  name: "ping",
  aliases: "latencia",
  description: "Obten la latencia del bot.",
  usage: "{prefix}ping", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Utilidad",
  nonPrefixed: false,
  code: `
  $author[Obteniendo datos sobre mi latencia y un poco mas!;$authorAvatar] $color[$getVar[rojo]] $footer[Entre mas ping mas tardare en darte los datos.]
  $editIn[$botPing;{author:Datos encontrados!:$authorAvatar}{field:Mi ping:\`$botPing\`ms:yes}{field:Tiempo Vivo:\`$uptime\`:yes}{field:Ping de la base de Datos:\`$dbPing\`ms:yes}
  {field:Ram:\`$ram\`:yes}{field:Cpu:\`$cpu\`:yes}{color:$getVar[verde]}]
  {field:Proyecto de [Github](https://github.com/JollyJolli/discord-music-bot-aoi.js)!}
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `, ////  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
}
