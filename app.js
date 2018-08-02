const pug = require('pug');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const dataRoute = require('./routes/data');
const indexRoutre = require('./routes/index');

// Init app
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set body parser
app.use(bodyParser.urlencoded({extended: false}));

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Routes
app.use('/', indexRoutre);
app.use('/data', dataRoute);

// Set port
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});