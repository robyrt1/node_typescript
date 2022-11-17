import { Request, Response } from "express";

import { Category } from "../../models/Cataegory";

export async function listCategories(req: Request, res: Response) {
  try{
    const categories = await Category.find();
    res.json(categories);
  }catch(err){
    res.status(500).json(`error: ${err}`);
  }
}