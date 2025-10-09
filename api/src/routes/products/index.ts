import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} from "./controler";

import { validateData } from "../../middleweres/validationMiddlewere";
import z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "name cannot be empty"),
  price: z.number().min(0, "price must be a positive number"),
  image: z.string().url("image must be a valid URL"),
  description: z.string().min(1, "description cannot be empty"),
  quantity: z.number().min(0, "inStock must be a positive number"),
});

const router = Router();

router.get("/", getAllProducts);

router.post("/", validateData(productSchema), createProduct);

router.get("/:id", getProductById);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

export default router;
