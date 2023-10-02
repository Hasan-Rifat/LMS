import express from "express";
import { CommentController } from "./comments.controller";

const router = express.Router();

router.get("/", CommentController.getComment);
router.get("/:id", CommentController.getCommentById);
router.post("/", CommentController.createComment);
router.patch("/:id", CommentController.updateComment);
router.delete("/:id", CommentController.deleteComment);

export const CommentRoutes = router;
