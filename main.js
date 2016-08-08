let request = require('request');
function transfer() {
    let sentence = 'hello world';
    request('http://localhost:3000/say/' + sentence, function (error, response, body) {
        console.log(body);
    });
}

transfer();