import express from "express";
import { NotificationController } from "./notification.controller";

const router = express.Router();

router.get("/", NotificationController.getNotification);
router.get("/:id", NotificationController.getNotificationById);
router.post("/", NotificationController.createNotification);
router.patch("/:id", NotificationController.updateNotification);
router.delete("/:id", NotificationController.deleteNotification);

export const NotificationRoutes = router;
