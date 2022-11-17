import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function ChangeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    console.log(orderId);
    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      return res
        .status(400)
        .json({
          error: "Status should be one of these:WAITING, IN_PRODUCTION, DONE."
        });
    }

    await Order.findByIdAndUpdate(orderId, {status});

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
