import express from "express";
import { TagsController } from "./tags.controller";

const router = express.Router();

router.get("/", TagsController.getTags);
router.get("/:id", TagsController.getTagsById);
router.post("/", TagsController.createTags);
router.patch("/:id", TagsController.updateTags);
router.delete("/:id", TagsController.deleteTags);

export const TagsRoutes = router;
