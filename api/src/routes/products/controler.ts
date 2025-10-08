import { Request, Response } from "express";

export const getAllProducts = (req: Request, res: Response) => {
  res.send("Get all products");
};

export const createProduct = (req: Request, res: Response) => {
  res.send("Create a new product");
};

export const getProductById = (req: Request, res: Response) => {
  res.send(`Get product with ID ${req.params.id}`);
};

export const updateProductById = (req: Request, res: Response) => {
  res.send(`Update product with ID ${req.params.id}`);
};

export const deleteProductById = (req: Request, res: Response) => {
  res.send(`Delete product with ID ${req.params.id}`);
};
