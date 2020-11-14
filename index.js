
const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

fakeApi = () => {
return [
        {
            name: 'oslo',
            lane: 'midlaner'
        },
        {
            name: 'tokio',
            lane: 'toplaner'
        },
        {
            name: 'berlin',
            lane: 'toplaner'
        },
        {
            name: 'Cairo',
            lane: 'midlaner'
        },
        {
            name: 'Rome',
            lane: 'midlaner'
        }
];
}

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});

app.listen(port, () => console.log(`App listening to port ${port}`));