var express = require('express');
var app = express();
var port = 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/contacts', function(req, resp) {
    resp.render('contact_us')
});



app.post('/process-contacts', urlEncodedParser, function(req, resp) {
    var myweight = req.body.weight;
    var myheight = req.body.height;
    BMI = myweight / (myheight * myheight);

    if (BMI < 18.5) {
        resp.end('Thanks ' + req.body.first_name + ' ' +
            req.body.last_name + '\n' +
            ' your weight is:' + req.body.weight +
            ' and your height is:' + req.body.height +
            '\n' + 'Your BMI is ' + BMI +
            '\n' + 'you are underweight...');
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        resp.end('Thanks ' + req.body.first_name + ' ' +
            req.body.last_name + '\n' +
            ' your weight is:' + req.body.weight +
            ' and your height is:' + req.body.height +
            '\n' + 'Your BMI is ' + BMI +
            '\n' + 'you are healthy...');
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        resp.end('Thanks ' + req.body.first_name + ' ' +
            req.body.last_name + '\n' +
            ' your weight is:' + req.body.weight +
            ' and your height is:' + req.body.height +
            '\n' + 'Your BMI is ' + BMI +
            '\n' + 'you are overweight...');
    } else {
        resp.end('Thanks ' + req.body.first_name + ' ' +
            req.body.last_name + '\n' +
            ' your weight is:' + req.body.weight +
            ' and your height is:' + req.body.height +
            '\n' + 'Your BMI is ' + BMI +
            '\n' + 'you are obese...');
    }

});

app.listen(port);
console.log("Console listening on port 3000");