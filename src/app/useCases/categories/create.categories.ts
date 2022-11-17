import { Request, Response } from "express";

import { Category } from "../../models/Cataegory";

export async function CreateCategories(req: Request, res: Response) {
  try {
    if (!req.body.name) {
      res.status(400).json({ error: "Name is required" });
    }
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(`error: ${err}`);
  }
}
