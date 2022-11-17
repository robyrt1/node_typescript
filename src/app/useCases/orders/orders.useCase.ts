import { statusCode } from "./../../../shared/constants/http.code";
import { Order } from "../../models/Order";
import { Request, Response } from "express";

export class OrdersUseCase {
  public async findAll(req: Request, res: Response) {
    try {
      const order = await Order.find()
        .sort({ createdAt: 1 })
        .populate("products.product");
      res.status(statusCode.OK).json(order);
    } catch (err) {
      res.status(statusCode.INTERNAL_SERVER_ERROR).json(`error: ${err}`);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const order = await Order.create(req.body);
      res.status(statusCode.CREATED).json(order);
    } catch (err) {
      res.status(statusCode.INTERNAL_SERVER_ERROR).json(`error: ${err}`);
    }
  }

  public async changeStatus(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      console.log(orderId);
      if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
        return res.status(400).json({
          error: "Status should be one of these:WAITING, IN_PRODUCTION, DONE.",
        });
      }

      await Order.findByIdAndUpdate(orderId, { status });

      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      await Order.findByIdAndDelete(orderId);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
