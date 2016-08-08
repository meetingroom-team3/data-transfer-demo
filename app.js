let express = require('express');
let app = express();

app.get('/say/:sentence',function (req,res) {
    let word = req.params.sentence;
    res.send(word);
});

app.listen(3000);
console.log('listen localhost:3000');