import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const product = await Product.find().where("category").equals(req.params.categoryId);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(`error: ${err}`);
  }
}