module.exports = {
  name: "volume",
  aliases: "vol",
  description: "POner un volumen a la musica!",
  usage: "{prefix}volme (Cantidad)", /// () = Obligatorio | <> = Opcional 
  perms: "All",
  cooldown: "0s",
  Emblemado: "Si",
  Categoria: "Musica",
  nonPrefixed: false,
  code: `
  $volume[$message[1]] **El volumen se __ajusto__ perfectamente en __$message[1]__%!**
  $argsCheck[>1;Te falta ingresar una cantidad!]
  $onlyIf[$isNumber[$message[1]]==true;Eso no es un numero! D:]
  $onlyIf[$message[1]<201;Pon una cantidad entre **0** - **200**! 😡 😠 😣 😤 😖]
  $onlyIf[$queueLength!=0;No hay musica en el queue, no puedes ejecutar este comando por eso mismo.]
$onlyIf[$checkContains[$message[1];-]==false;Musica negativo?... ***__NO__***]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
     $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
  $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
  `,
}
