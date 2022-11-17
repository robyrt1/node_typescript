import express from "express";
import mongoose from "mongoose";
import path from "node:path";

import { categotiesRouter } from "./app/routes/categories.router";
import { productsRouter } from "./app/routes/products.router";
import { OrdersRouter } from "./app/routes/orders.router";

const app = express();

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const port = 3001;
    app.use(
      "/upload",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(categotiesRouter, productsRouter, OrdersRouter);

    app.listen(port, () => {
      console.log("server is running o http://localhost:3001/");
    });
  })
  .catch(() => console.log("Erro ao conectar no banco"));
