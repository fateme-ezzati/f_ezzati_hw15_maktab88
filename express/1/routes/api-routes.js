const router = require('express').Router();
const {
	getProductInfo,getAllProduct
} = require('../controllers/product-controller');


router.get('/product/all', getAllProduct);

router.get('/product/:title', getProductInfo);

// router
// 	.route('/:title');


module.exports = router;