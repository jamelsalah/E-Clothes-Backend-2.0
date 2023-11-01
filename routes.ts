import * as express from "express";
import categoryController from './controllers/categoryController'
import productController from './controllers/productController'
import userController from './controllers/userController'



const router = express.Router();


router.get("/home", productController.getProducts);
router.get("/categories", categoryController.getCategories);
router.post("/categories/add_category", categoryController.addCategory);
router.post("/add_product", productController.addProduct);
router.post("/register", userController.AddUser);
router.post("/auth", userController.auth);


export default router;