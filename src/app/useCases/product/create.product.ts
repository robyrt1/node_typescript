import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function CreateProducts(req: Request, res: Response) {
  try {

    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;
    const result = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients? JSON.parse(ingredients):[]
    });

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(`error: ${err}`);
  }
}
