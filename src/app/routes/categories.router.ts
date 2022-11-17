import { Router } from "express";
import { CreateCategories } from "../useCases/categories/create.categories";
import { listCategories } from "../useCases/categories/list.categories";
import { listProductsByCategory } from "../useCases/categories/list.productsBy.category";

export const categotiesRouter = Router();


//  List Categories
categotiesRouter.get("/categories", listCategories);

// create category
categotiesRouter.post("/categories", CreateCategories);

//get product by category
categotiesRouter.get("/categories/:categoryId/products", listProductsByCategory);
