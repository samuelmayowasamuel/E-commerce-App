import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} from "./controler";

import { validateData } from "../../middleweres/validationMiddlewere";
import { createProductSchema, updateProductSchema } from "../../db/schema";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", validateData(createProductSchema), createProduct);

router.put("/:id", validateData(updateProductSchema), updateProductById);

router.delete("/:id", deleteProductById);

export default router;
