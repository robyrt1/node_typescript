import { Router } from "express";
import { OrdersUseCase } from "../useCases/orders/orders.useCase";
const ordersUseCase = new OrdersUseCase();

export const OrdersRouter = Router();

// List Orders
OrdersRouter.get("/orders", ordersUseCase.findAll);
// create Orders
OrdersRouter.post("/orders", ordersUseCase.create);
// change order status
OrdersRouter.patch("/orders/:orderId", ordersUseCase.changeStatus);

// Delete/cancel order
OrdersRouter.delete("/orders/:orderId", ordersUseCase.delete);
