import { statusCode } from "./../../../shared/constants/http.code";
import { Product } from "./../../models/Product";
import { Category } from "./../../models/Cataegory";
import { Request, Response } from "express";

export class CategoriesUseCase {
  public async finAll(req: Request, res: Response) {
    try {
      const categories = await Category.find();
      res.status(statusCode.OK).json(categories);
    } catch (err) {
      res.status(statusCode.INTERNAL_SERVER_ERROR).json(`error: ${err}`);
    }
  }

  public async createNew(req: Request, res: Response) {
    try {
      if (!req.body.name) {
        res.status(statusCode.BAD_REQUEST).json({ error: "Name is required" });
      }
      const category = await Category.create(req.body);
      res.status(statusCode.OK).json(category);
    } catch (err) {
      res.status(statusCode.INTERNAL_SERVER_ERROR).json(`error: ${err}`);
    }
  }

  public async findProductsByCategory(req: Request, res: Response) {
    try {
      const product = await Product.find()
        .where("category")
        .equals(req.params.categoryId);
      res.status(statusCode.OK).json(product);
    } catch (err) {
      res.status(statusCode.INTERNAL_SERVER_ERROR).json(`error: ${err}`);
    }
  }
}
