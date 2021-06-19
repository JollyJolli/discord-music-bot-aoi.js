module.exports = {
    name: "userinfo",
    aliases: "i",
    description: "Obtener informacion de un usuario o de ti.",
    usage: "{prefix}userinfo <Usuario>", /// () = Obligatorio | <> = Opcional 
    perms: "All",
    cooldown: "0s",
    Emblemado: "Si",
    Categoria: "Utilidad",
    nonPrefixed: false,
    code: `
    $author[Informacion de $username[$findUser[$message[1]]];$userAvatar[$findUser[$message[1]]]]
    $addField[Owner del Bot?;$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[eOwner;$findUser[$message[1]]]==1];true;Este usuario es mi Owner];false;No es el owner del bot] <:corona:855592847356067860>  ;yes]
    $addField[Amigo del Owner?;$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[eFriend;$findUser[$message[1]]]==1];true;Este usuario es amigo de mi desarollador];false;Este usuario no es amigo de mi desarollador] <:8263blurplemembers:855553880602181654> ;yes]
    $addField[Staff del bot?;$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[eStaff;$findUser[$message[1]]]==1];true;Este usuario es staff de mi];false;Este usuario no es staff de mi] <:9023blurpleemployee:855553881072205865> ;yes]
    $addField[Emblemas de Discord;$getUserBadges[$findUser[$message[1]]];yes]
    $addField[Entro al discord en;$memberJoinedDate[$findUser[$message[1]];date];no]
$addField[Developer del bot?; $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[eDev;$findUser[$message[1]]]==1];true;Este usuario es developer mio];false;Este usuario no es developer mio ] <:3446blurplecertifiedmoderator:855553880283676692>]
    $addField[Tiene el DM Abierto?;$replaceText[$replaceText[$checkCondition[$isUserDMEnabled[$findUser[$message[1]]]==true];true;Este usuario tiene el DM Abierto para mi.];false;Este usuario no tiene el DM abierto para mi.];yes]
    $addField[ID;$findUser[$message[1]];yes]
    $addField[Discriminador (Usuario#**__0000__**);$discriminator[$findUser[$message[1]]];yes]
    $addField[Esta Boosteando?;$replaceText[$replaceText[$checkCondition[$isBoosting[$findUser[$message[1]]]==true];true;Sí.];false;No.];yes]
$color[$getVar[Azul]]
    $onlyIf[$voiceID!=;No estas en un canal de voz!]
    $suppressErrors[Ocurrio un error inesperado al ejecutar este comando. Ya se le contacto a mi developer. Vuelve a intentarlo mas tarde 🥺]
    $onlyIf[$checkContains[$channelPermissionsFor[$clientID];Embed Links]==true;No tengo permisos para enviar "\`EMBED_LINKS\`" en este canal!]
    `, ////  $onlyIf[$voiceID==$voiceID[$clientID];No estas en el mismo canal de voz que yo.]
  } 
  /*
  $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[Variable;$findUser[$message[1]]]==1];true;Este usuario es $getVar[Variable_del_Emogi]];false;Este usuario no es $getVar[Variable_del_Emogi]]
  */