import express from 'express';
import { getAllProducts , getProductByFilters } from '../controllers/product-controller.js';

const router = express.Router();

router.get("/get-all-products",getAllProducts);
router.get('/product',getProductByFilters);


export default router;