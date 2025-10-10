import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} from "./controler";

import { validateData } from "../../middleweres/validationMiddlewere";
import { createSelectSchema } from "drizzle-zod";
import { productsTable } from "../../db/schema";

const productSchema = createSelectSchema(productsTable).omit({
  id: true,
});

const router = Router();

router.get("/", getAllProducts);

router.post("/", validateData(productSchema), createProduct);

router.get("/:id", getProductById);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

export default router;
