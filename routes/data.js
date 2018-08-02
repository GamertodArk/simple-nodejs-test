const express = require('express');
const route = express.Router();

route.get('/', (req,res) => {
	res.render('show_data');
});

route.post('/', (req,res) => {
	res.render('show_data', {data: req.body.data});
});

module.exports = route;