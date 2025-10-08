import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} from "./controler";

const router = Router();

router.get("/", getAllProducts);

router.post("/", createProduct);

router.get("/:id", getProductById);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

export default router;
