import { Order } from "./../../models/Order";
import { Request, Response } from "express";

export async function ListOrders(req: Request, res: Response) {
  try {
    const order = await Order.find()
      .sort({ createdAt: 1 })
      .populate("products.product");
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json(`error: ${err}`);
  }
}
