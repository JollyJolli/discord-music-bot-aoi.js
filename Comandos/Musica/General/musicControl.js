module.exports = {
  name: "musicControl",
  aliases: ["musiControl","control"],
  description: "Control de la musica por medio de reacciones!",
  usage: "{prefix}control", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "40s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
$reactionCollector[$splitText[1];$authorID;5m;🔈,🔉,🔊,⏭,🔃,⏹,🔄;25Vol,50Vol,100Vol,Skip,Restart,Stop,Loop;yes]



$textSplit[$sendMessage[{title:Control de la musica!}{description:Reacciona al emoji correcto para cada funcion!}
{field:Volumen 25%:#COLON#speaker#COLON#:yes}
{field:Volumen 50%:#COLON#sound#COLON#:yes}
{field:Volumen 100%:🔊:yes}
{field:Saltar la cancion:#COLON#track_next#COLON#:yes}
{field:Reiniciar la cancion:#COLON#arrows_clockwise#COLON#:yes}
{field:Parar la cancion actual:#COLON#stop_button#COLON#:yes}
{field:Activar/Desactivar modo Loop:#COLON#arrows_counterclockwise#COLON#:yes}
{author:Disfruta de tener el control $username!:$authorAvatar}
{thumbnail:$authorAvatar}
{color:$getVar[azul]};yes]; ]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  $cooldown[40s;Este comando cuenta con 40 segundos de cooldown!\n Te toca esperar \`$replaceText[%time%;seconds;Segundos]\`]
  `,
}

///LOOOP 
/*
 $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
*/
