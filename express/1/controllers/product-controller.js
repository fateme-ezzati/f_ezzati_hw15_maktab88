const { writeFile } = require('node:fs/promises');
const { join } = require('node:path');
const products = require('../db/products-data.json')
// const { AppError } = require('../utils/app-error');


const getAllProduct = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: { products }
	});
};

const getProductInfo = (req, res, next) => {
	const { title } = req.params;

	const product = products.find(product => product.details.title === title);

    console.log(product)

	if (!product) {
		// return next(new AppError(404, `username: ${username} not found.`));
	}

	res.status(200).json({
		status: 'success',
		data: { product }
	});
};

module.exports = { getAllProduct,getProductInfo };
