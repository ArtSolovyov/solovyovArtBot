const TelegramBot = require('node-telegram-bot-api');
const token = '1114582518:AAHLzzWxYcFnJNRHLkcmw3CIeTiKeifPXC8';



let bot = new TelegramBot(token, {
    polling: true,

});



bot.on('message', (msg) => {
    let id = msg.from.id;
    let text = msg.text;
    let data = msg.date;
    data = Date.parse(data);
    bot.sendMessage(id, ` ${msg.from.first_name}, привет! Скоро тут всё будет! От тебя пришло сообщение: ${text}`);

});


bot.on('polling_error', (err) => console.log(err));