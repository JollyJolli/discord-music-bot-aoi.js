module.exports = [{
  name: "help",
  description: "Seccion de ayuda!",
  aliases: ["h" , "comandos" , "commands" , "ayuda"],
  usage: "{prefix}help <Nombre del comando>", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  Emblemado: "Si",
  cooldown: "3s",
  Categoria: "Ayuda",
  nonPrefixed: false,
  code: `
$if[$argsCount>=1]
$sendMessage[{author:$username:$authorAvatar}
{field:Descripcion:$commandInfo[$message[1];description]:no}
{field:Aliases:$commandInfo[$message[1];aliases]:no}
{field:Modo de uso:$commandInfo[$message[1];usage]:no}
{field:Permisos Requeridos:$commandInfo[$message[1];perms]:yes}
{field:Es un emblemado?:$commandInfo[$message[1];Emblemado]:yes}
{field:Cooldown:$commandInfo[$message[1];cooldown]:yes}
{field:Categoria:$commandInfo[$message[1];Categoria]:yes}
{footer:() = Obligatorio | <> = Opcional:$authorAvatar}
{color:$getVar[azul]}{thumbnail:$userAvatar[$clientID]};no]
$onlyIf[$checkCondition[$commandInfo[$message[1];aliases]==]!=true;{author:$username:$authorAvatar}
{field:Descripcion:$commandInfo[$message[1];description]:no}
{field:Modo de uso:$commandInfo[$message[1];usage]:no}
{field:Permisos Requeridos:$commandInfo[$message[1];perms]:yes}
{field:Es un emblemado?:$commandInfo[$message[1];Emblemado]:yes}
{field:Cooldown:$commandInfo[$message[1];cooldown]:yes}
{field:Categoria:$commandInfo[$message[1];Categoria]:yes}
{footer:() = Obligatorio | <> = Opcional:$authorAvatar}
{color:$getVar[azul]}{thumbnail:$userAvatar[$clientID]}]
$onlyIf[$checkCondition[$commandInfo[$message[1];name]!=]==true;Ese comando no existe!]
$else
$sendMessage[{footer:github.com/JollyJolli/discord-music-bot-aoi.js:$userAvatar[$clientID]}{color:$getVar[azul]}
{author:$username:$authorAvatar}
{field:Bot Owner:**$getServerVar[prefix]**eval\n**$getServerVar[prefix]**execute\n**$getServerVar[prefix]**updateCommands:yes}
{field:Musica:**$getServerVar[prefix]**joinVC\n**$getServerVar[prefix]**leaveVC\n**$getServerVar[prefix]**grab\n**$getServerVar[prefix]**loop\n**$getServerVar[prefix]**control\n**$getServerVar[prefix]**np\n**$getServerVar[prefix]**skip\n**$getServerVar[prefix]**status\n**$getServerVar[prefix]**volume\n**$getServerVar[prefix]**lyrics\n**$getServerVar[prefix]**play\n**$getServerVar[prefix]**seek\n**$getServerVar[prefix]**stop\nclearqueue\n**$getServerVar[prefix]**prune\n**$getServerVar[prefix]**queue\n**$getServerVar[prefix]**shuffle:no}
{field:Utilidad:**$getServerVar[prefix]**invite\n**$getServerVar[prefix]**ping\n**$getServerVar[prefix]**userinfo:yes}
{field:Recordatorio:Para tener mas info usa#COLON# $getServerVar[prefix]help <Comando> | () = Obligatorio | <> = Opcional:no};no]
$endIf
$cooldown[3s;Este comando tiene un cooldown de 3 segundos!]
  $onlyIf[$checkContains[$channelPermissionsFor[$authorID];Add Reactions]==true;Ocupo permiso para poner reacciones.]
  $onlyIf[$checkContains[$channelPermissionsFor[$authorID];Embed Links]==true;Ocupo permiso de poner emblemados.]
   $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  
  `,
}]
