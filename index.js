const TelegramBot = require('node-telegram-bot-api');
const token = '1114582518:AAHLzzWxYcFnJNRHLkcmw3CIeTiKeifPXC8';


const spotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new spotifyWebApi({
    clientId: '86cad3170ec34815855047f60d608475',
    clientSecret: 'dda8d274e31d4aaa863a3e71232f09a4',
    redirect_uri: 'http://localhost:8888/callback',
    accessToken: 'cacas3Sdas312dsFqrqwqddsdas321',
});
var scopes = 'user-read-private user-read-email';

spotifyApi.ajax(
    {
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      data: {
        "grant_type":    "authorization_code",
        "code":          'fsascas241324sc4fsdf4gjtyu4h3bf',
        "redirect_uri":  'http://localhost:8888/callback',
        "client_secret": 'dda8d274e31d4aaa863a3e71232f09a4',
        "client_id":     '86cad3170ec34815855047f60d608475',
      },
      success: function(result) {
        // handle result...
      },
    }
  );


let bot = new TelegramBot(token, {
    polling: true,

});



bot.on('message', (msg) => {
    let id = msg.from.id;
    let text = msg.text;
    let data = msg.date;
    data = Date.parse(data);
    bot.sendMessage(id, ` ${msg.from.first_name}, привет! Скоро тут всё будет! От тебя пришло сообщение: ${text}`);

    spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
    .then(function(data) {
      console.log('Artist information', data.body);
    }, function(err) {
      console.error(err);
    });


});


bot.on('polling_error', (err) => console.log(err));