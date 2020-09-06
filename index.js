const TelegramBot = require('node-telegram-bot-api');
const token = '1114582518:AAHLzzWxYcFnJNRHLkcmw3CIeTiKeifPXC8';



let bot = new TelegramBot(token, {
    polling: true,

});

const catsArr = ['images/1.gif', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg'];

function getRandomCat () {
    let cat;

    cat = catsArr[Math.floor(Math.random()*catsArr.length)];

    return cat;
}


const keyboard = [
    [
      {
        text: '=== Написать мне ===', // текст на кнопке
        callback_data: 'tg' // данные для обработчика событий
      }
    ],
    [
      {
        text: '=== Мой инстаграм тут ===',
        url: 'https://www.instagram.com/arthur_soloview/'
      }
    ],
    [
      {
        text: '=== Подборки на SouldCloud ===',
        url: 'https://soundcloud.com/supersolovyov'
      }
    ],
    [
      {
        text: '=== Подборки на Spotify ===',
        url: 'https://open.spotify.com/user/31hj7nki3vv2nphglaqvzn4x5p7e'
      }
    ]
  ];

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const firstName = query.message.chat.first_name;
  
    let img = '';
  
    if (query.data === 'tg') { 
      
      bot.sendMessage(chatId, `${firstName}, я тут @arthursolo. Пиши мне! <3`);

        function sendCat () {
            bot.sendMessage(chatId, 'А пока лови случайного котика');
            cat = getRandomCat();
            bot.sendPhoto(chatId, cat);
        }

        setTimeout(sendCat, 1000);


      
    } else {
      bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
        // прикрутим клаву
        reply_markup: {
          inline_keyboard: keyboard
        }
      });
    }

    console.log(query);

  });

  bot.on('message', (msg) => {
    let id = msg.from.id;
    let text = msg.text;
    bot.sendPhoto(id, 'images/2.jpg');
    bot.sendMessage(id, `${msg.from.first_name}, привет! От тебя пришло сообщение: "${text}", и Артур ещё не научил меня реагировать на такое. Но мои возможности будут расширятся прямопропорционально свободному времени моего создателя. Лучше воспользуйся меню!`, {
        reply_markup: {
            inline_keyboard: keyboard
          }
    });

    console.log(msg);

});


bot.on('polling_error', (err) => console.log(err));