import { productsTable } from "./../../db/schema";
import { Request, Response } from "express";
import db from "../../db/index.js";
import { eq } from "drizzle-orm";

export async function getAllProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const products = await db.select().from(productsTable);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}

export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
}

export async function getProductById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(req.params.id)));
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
}

export async function updateProductById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const [updatedProduct] = await db
      .update(productsTable)
      .set(req.body)
      .where(eq(productsTable.id, Number(id)))
      .returning();

    if (!updatedProduct) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: "Faild to update ptoduct" });
  }
}

export async function deleteProductById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const [deletedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number(id)))
      .returning();

    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json({ message: "Product deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Faild to delete ptoduct" });
  }
}
