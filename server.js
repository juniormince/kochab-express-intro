const express = require('express');

const app = express();
const PORT = 5000;

//req is request, res is response
app.get('/', function (req, res) {
    res.send('hey world');
});

app.get('/hey', function (req, res) {
    res.send('howdy');
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`);
});