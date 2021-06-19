module.exports = {
      type: 'musicEndCommand',
      channel: "$channelID",
      code: `
      Hola! La musica ya termino, puedes volver a escuchar con \`)play (Cancion)\` $setServerVar[Escuchadas;0]
      `
}