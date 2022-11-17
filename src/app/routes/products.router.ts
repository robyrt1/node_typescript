import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { CreateProducts } from "../useCases/product/create.product";
import { ListProducts } from "../useCases/product/list.products";

export const productsRouter = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "../../..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});


// List products
productsRouter.get("/products", ListProducts);
// create product
productsRouter.post("/products", upload.single("imagePath"), CreateProducts);