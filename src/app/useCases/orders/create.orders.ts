import { Request, Response } from "express";

import { Order } from "./../../models/Order";

export async function CreateOrders(req: Request, res: Response) {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json(`error: ${err}`);
  }
}
