const express = require('express'), app = express(), exphbs = require('express-handlebars');

    app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
	app.set('view engine', 'hbs');

    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/views'));

app.get('/Days/:day', function(req, res){
    res.render('Day_' + req.params.day);
})

app.listen(3000, function(){
    console.log('Servidor Rodando Na Porta 3000');
})