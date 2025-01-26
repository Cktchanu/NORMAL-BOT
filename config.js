const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVy46jRhT9l9raPeZh87DUUgA/sfEDsNsmE40KKB7maSjA9sibLLLIahZZRCPNB0SRJllkl5+aT4iw2+rOJDPpIFQqVV1OnXs599RbECd+jiboCLpvQZr5JcSonuJjikAXiIXjoAw0gQ0xBF3AjILtATfIlD8u485KZCy24+zVhddp+S2xNFxicnL6GZUExD04N0FamKFvfQWQH03zzniPZ/aAH2rLyTbMcodZOMPOUD6JgT53/YlZqtLwpNyDc40I/cyP3X7qoQhlMJyg4wL62cvoL3vVLiYV2c2c4+lhSDjLh1N84Bs9XrcMl+tp6jxeFerGXrkvo+/2ZrEzM8xlmK+2++GBsmVUkr3ecgsPjV1iBuxhv5rwikQKV/q578bIHtsoxj4+vrjuUCbnSDI7wwZfpJNAWBqb4dQZB5OQRguVLUKXQg1VeECr8cuIn8rUxM5UiRK9GAyMmbiUVsoC7RYCV1KJGxQOMYkaqu5KfyO+yG5aCf5X3ccjbtLWyLHacjoOo+xDaxeuoiWzn6lyVTHSfiezyPQK4oX0o+mqqE4wHUSkqFX2YKORIl2JsjEnW6GQ2bo6sGUcr3K9/UQf4iL7Kss5u4tahNwXImK/6M01u0/krrrtQeuotGdyiB0PzyorkwqO8A7eVCAFw/ZkmSNYaR4KDZk1xoux1Vhps5FZxSOuT3vL+0tGATqObdAlz02QIdfPcQaxn8SXNZptAmiXGrIyhC/lBcx2u25nRL/Hs8WUcye6Nl8vM1wYxnC2sePpcjE45KxJl2L7HjRBmiUWynNkj/wcJ9lRQXkOXZSD7reXP1UnnaEowUj27brr2izFc0yHJ5hv8leVB3EO0/RVjDBoAidLIgWBLs4K1ASXeFboCQTXFmmW6PUYqs31WYEjpL4ocSwjSXSdYXQ9U/cjlGMYpaBLsjTLEzxNE+fvmiBGB3yVT500TTaB42c5XsVFGibQvmnrtgktKylirB1jS6onKANd4mkZYezHbl4nVsQwszy/RFKdB+g6MMzRuQlsVPoWqvHAGg+D0iu5JdLK9aAyiDfymqrqwnlJfA1BJHSgRTJ3PENRd22Ocu441OHvTJ4gOJpt27xNgroc186tv/mikDZHLlaoXTLT4lOLKvcUI5Sknjmxb13EcFUAypB9q7IJraBI9SRA8VdwaepQPcjt1qq1paC9DMVib4iNgJ9A7hnuVVmg+/bJLaXErvHU6Xqi9Ugd1H+rPudzMXQp7p96iGEdDD59ePfj6/jTh/e/X8Y/6vHdD6/jN7f3afn9b5fxz0vIz5+FvPv+svnxMv76DOunz7F+eRZynX+ss3yUQM3fRhj6YQ66QFIco8ryQV8ZjSmzGg6FpStIrgCeJHNzgGuHbTcypfMUnRycuZvxeJoQB4ufPBgd1urErTUqJBtPBTUILh32OUhdN3lfGiKp6gw9Dh2jsfFSi1L4A1+OGubAsU5jZuQmglqEfW7TU/umI8pS1F4sKIIM/aTFDIde2vAkaXfg803rpAdqKtR2cZPu88PKFhlNDXG98PdWPkudB3baibe6vFwdGOTOFrhseGlvz4XTIgs6gqUeIfQtvc2OTlJjlGuJf9J6TtLJdWVdxvPFQQ8Mr7p608Ubw8c7yX90javQHR9dLP5RA/8llaeWI87NZxCPd8YXZC0+DI520LIxo2xOyaRlasxM2Sy0MEKInhstcpO5salVfUOeg3PtJWkIsZNkEeiCPDIhaIIQ5lh4sox/cSGKbYLoKKSphiG+OQ0Q6mfkOOD8F8AcxeoLCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "cKODT CHANU",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 94729865906",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





