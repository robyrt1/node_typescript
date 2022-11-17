import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function ListProducts(req: Request, res: Response) {
  try {
    const product = await Product.find();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(`error: ${err}`);
  }
}