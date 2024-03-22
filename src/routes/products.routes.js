import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, mockingProducts, updateProduct } from "../controllers/products.controller.js";
import { authorizeAdmin } from "../middlewares/auth.js";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:pId", getProductById);
productsRouter.post("/", authorizeAdmin, createProduct);
productsRouter.put("/:pId", authorizeAdmin, updateProduct);
productsRouter.delete("/:pId", authorizeAdmin, deleteProduct);
productsRouter.get("/mocking/mockingproducts", mockingProducts);

export default productsRouter;