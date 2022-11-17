import { Router } from "express";
import { ChangeOrderStatus } from "../useCases/orders/change.order.status";
import { CreateOrders } from "../useCases/orders/create.orders";
import { CancelOrder } from "../useCases/orders/delete.orders";
import { ListOrders } from "../useCases/orders/list.orders";


export const OrdersRouter = Router();

// List Orders
OrdersRouter.get("/orders", ListOrders);
// create Orders
OrdersRouter.post("/orders", CreateOrders);
// change order status
OrdersRouter.patch("/orders/:orderId", ChangeOrderStatus);

// Delete/cancel order
OrdersRouter.delete("/orders/:orderId", CancelOrder);
