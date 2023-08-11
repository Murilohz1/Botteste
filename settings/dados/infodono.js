const { fs, colors } = require('./_index.js');
const infodono = (prefix, numerodn, NomeDoBot, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return `╭︎⊰๑ᨐ✶乡»̶❁︎«̶乡✶ᨐ๑⊱╮︎
╎☀️∆𝗜𝗡𝗙𝗢𝗠𝗘𝗦𝗧𝗥𝗘∆☀️
╰︎⊰๑ᨐ✶乡»̶❁︎«̶乡✶ᨐ๑⊱╯︎
╎
｡･:*:･ﾟ★,｡･:*:･ﾟ☆
Oiê ${sender.split("@")[0]} ฅ^•ﻌ•^ฅ
｡･:*:･ﾟ★,｡･:*:･ﾟ☆
╎
※ۣۜۜ͜͡𝙈𝙚𝙨𝙩𝙧𝙚⧽ ₄₁ᷢ₅ᷡ⃟࿗𝑲𝑯𝑨𝑶𝑺-𝑫𝑬𝑽
╎
※ۣۜۜ͜͡𝙒𝙝𝙖𝙩𝙨⧽ wa.me/${numerodn}         
╎
※ۣۜۜ͜͡𝙋𝙧𝙚𝙛𝙞𝙭𝙤⧽﹙${prefix}﹚
╎                                    
※ۣۜۜ͜͡𝘽𝙤𝙩⧽ ${NomeDoBot}    
╎ 
╎                                  
╎    𝐍𝐨𝐛𝐫𝐞 𝐞́ 𝐨 𝐠𝐮𝐞𝐫𝐫𝐞𝐢𝐫𝐨 
╎            𝐪𝐮𝐞̂ 𝐬𝐮𝐣𝐚 
╎ 𝐬𝐮𝐚 𝐞𝐬𝐩𝐚𝐝𝐚 𝐝𝐞 𝐬𝐚𝐧𝐠𝐮𝐞!🩸      
╎ cxxx{}::::::::::::::::::::::::::::> 
╎      @𝒇𝒊𝒍𝒐́𝒔𝒐𝒇𝒐 𝒑𝒊𝒕𝒐𝒏🖋
╰︎⊰๑ᨐ✶乡»̶❁︎«̶乡✶ᨐ๑⊱╯︎
`
}

exports.infodono = infodono

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(colors.red(`Alterações salvas - '${__filename}'`))
    delete require.cache[file]
    require(file)
})