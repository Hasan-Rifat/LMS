import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.get("/", CategoryController.getCategory);
router.get("/:id", CategoryController.getCategoryById);
router.post("/", CategoryController.createCategory);
router.patch("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export const CategoryRoutes = router;
