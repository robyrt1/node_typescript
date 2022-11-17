import { Request, Response } from "express";
import { Product } from "./../../models/Product";
import { statusCode } from "../../../shared/constants/http.code";
export class PreductsUseCase {
  public async create(req: Request, res: Response) {
    try {
      const imagePath = req.file?.filename;
      const { name, description, price, category, ingredients } = req.body;
      const result = await Product.create({
        name,
        description,
        imagePath,
        price: Number(price),
        category,
        ingredients: ingredients ? JSON.parse(ingredients) : [],
      });

      res.status(statusCode.OK).json(result);
    } catch (err) {
      res.status(statusCode.INTERNAL_SERVER_ERROR).json(`error: ${err}`);
    }
  }

  public async findAll(req: Request, res: Response) {
    try {
      const product = await Product.find();
      res.status(statusCode.OK).json(product);
    } catch (err) {
      res.status(statusCode.INTERNAL_SERVER_ERROR).json(`error: ${err}`);
    }
  }
}
  