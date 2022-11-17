import { Router } from "express";
import { CategoriesUseCase } from "../useCases/categories/categories.useCase";
const categoriesUseCase = new CategoriesUseCase();
export const categotiesRouter = Router();

//  List Categories
categotiesRouter.get("/categories", categoriesUseCase.finAll);

// create category
categotiesRouter.post("/categories", categoriesUseCase.createNew);

//get product by category
categotiesRouter.get("/categories/:categoryId/products", categoriesUseCase.findProductsByCategory);
