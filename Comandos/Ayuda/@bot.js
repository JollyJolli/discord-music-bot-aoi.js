module.exports = {
  name: "<@!852297273311756309>",
  aliases: ["<@852297273311756309>"],
  description: ".",
  usage: "{prefix}", /// () = Obligatorio | <> = Opcional 
  perms: ".",
  cooldown: ".",
  Emblemado: "no",
  Categoria: ".",
  nonPrefixed: true,
  code: `
$reply[$messageID;Hola! Soy un bot de musica que no invitaras a tu servidor y si lo haces te amare mas, gracias por leer!;yes]
  `, ////  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
}