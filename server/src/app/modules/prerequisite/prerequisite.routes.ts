import express from "express";
import { PrerequisiteController } from "./prerequisite.controller";

const router = express.Router();

router.get("/", PrerequisiteController.getPrerequisite);
router.get("/:id", PrerequisiteController.getPrerequisiteById);
router.post("/", PrerequisiteController.createPrerequisite);
router.patch("/:id", PrerequisiteController.updatePrerequisite);
router.delete("/:id", PrerequisiteController.deletePrerequisite);

export const TagsRoutes = router;
