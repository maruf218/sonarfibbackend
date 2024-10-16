import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"; // Adjust the path accordingly

const router = express.Router();

router.post("/", createProduct); // Create product
router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get product by ID
router.put("/:id", updateProduct); // Update product by ID
router.delete("/:id", deleteProduct); // Delete product by ID

export default router;
