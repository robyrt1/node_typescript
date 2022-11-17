
import { Router } from "express";
import { upload } from "../../shared/middlewares/product/uploadImage";
import { PreductsUseCase } from "../useCases/product/products.useCase";
const preductsUseCase = new PreductsUseCase();


export const productsRouter = Router();

// List products
productsRouter.get("/products", preductsUseCase.findAll);
// create product
productsRouter.post(
  "/products",
  upload.single("imagePath"),
  preductsUseCase.create
);
