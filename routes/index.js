const express = require('express');
const route = express.Router();

route.get('/', (req,res) => {
	res.render('home', {title: 'Gamertod', content: 'Hello world'});
});

module.exports = route;