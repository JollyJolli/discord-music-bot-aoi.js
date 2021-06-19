module.exports = {
    name:"$alwaysExecute",
    nonPrefixed: true,
    code:`
    $reply[$messageID;{color:$getVar[verde]}{author:$username:$authorAvatar}{description:Comando no encontrado!}{field:Problema / Solucion 1:Puede que este comando no exista:yes}{field:Problema / Solucion 2:Puede que lo hayas escrito mal!:yes}{field:Intentaste poner: \`$replaceText[$message[1];$getServerVar[prefix];]\`:no}{footer:Espero haber ayudado!:$authorAvatar};yes]
    
    $onlyIf[$commandInfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
    $onlyIf[$stringStartsWith[$message[1];$getServerVar[prefix]]==true;]
    `
    }