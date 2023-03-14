const router = require('express').Router();
const {
	getProductInfo
} = require('../controllers/product-controller');


router.get('/product', getProductInfo);

router.get('/product/:title', getProductInfo);

// router
// 	.route('/:title');


module.exports = router;