const express = require("express")
const router = express.Router()
const { createProducts,
    findAllProducts,
    findProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')

router.post('/', createProducts)
router.get("/", findAllProducts)
router.get("/:id", findProductById)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router;