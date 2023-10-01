import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.get("/get-all-orders", OrderController.getOrders);
router.get("/get-order/:id", OrderController.getOrderById);
router.patch("/update-order/:id", OrderController.updateOrder);
router.delete("/delete-order/:id", OrderController.deleteOrder);

export const OrderRoutes = router;
