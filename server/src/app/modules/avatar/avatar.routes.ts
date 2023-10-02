import express from "express";
import { AvatarController } from "./avatar.controller";

const router = express.Router();

router.get("/", AvatarController.getAvatar);
router.get("/:id", AvatarController.getAvatarById);
router.post("/", AvatarController.createAvatar);
router.patch("/:id", AvatarController.updateAvatar);
router.delete("/:id", AvatarController.deleteAvatar);

export const AvatarRoutes = router;
