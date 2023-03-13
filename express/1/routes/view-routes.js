const { join } = require('node:path');
const router = require('express').Router();
const products = require('../db/products-data.json')

router.get('/home', (req, res) => {
	res.status(200).render('pages/home.ejs', 
		{data: products}
	);
});

router.get('/about', (req, res) => {
	res.status(200).render('pages/about.ejs'
	);
});

router.get('/contact', (req, res) => {
	res.status(200).render('pages/contact.ejs'
	);
});

router.get('/product/:title', (req, res) => {
	res.status(200).render('pages/product.ejs');
});



module.exports = router;