const Aoijs = require("aoi.js") ///npm i aoi.js
const bot = new Aoijs.Bot({ 
  token: "", //El token del bot (discord.com/developers)
  prefix: ["$getServerVar[Prefix]"], //El prefix de tu bot | Para agregar mas de un prefix pon lo siguiente: [">" , "<" , "-"]
})
 
bot.onMessage() // Sin esto no prende
bot.loadCommands(`./Comandos/`) //Con esto permitimos los comandos en carpetas.

bot.variables({
  ///Colores
  Rojo: "FF5252",
  rojo: "FF5252",
  Verde: "D5FF37",
  verde: "D5FF37",
  azul: "AEFFFF",
  Azul: "AEFFFF",
    Inv: "2f3136",
    inv: "2f3136",
  //Prefix
  Prefix: ")",
  prefix: ")",
    })

bot.status({
  text: "Status",
  type: "LISTENING",
  time: 12
})


///CONTROL
///25Vol,50Vol,100Vol,Skip,Restart,Stop,Loop
bot.awaitedCommand({
  name: "25Vol",
  code: `$volume[25]`
})
bot.awaitedCommand({
  name: "50Vol",
  code: `$volume[50]`
})
bot.awaitedCommand({
  name: "100Vol",
  code: `$volume[100]`
})
bot.awaitedCommand({
  name: "Skip",
  code: `$skipSong`
})
bot.awaitedCommand({
  name: "Restart",
  code: `$seekTo[1]`
})
bot.awaitedCommand({
  name: "Stop",
  code: `$stopSong`
})
bot.awaitedCommand({
  name: "Loop",
  code: `$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;**El loop ha sido activado**];false;**El loop ha sido desactivado**] $deleteIn[5s]`
})
