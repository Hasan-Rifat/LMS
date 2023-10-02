import express from "express";
import { ReviewController } from "./reviewcontroller";

const router = express.Router();

router.get("/", ReviewController.getReview);
router.get("/:id", ReviewController.getReviewById);
router.post("/", ReviewController.createReview);
router.patch("/:id", ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);

export const ReviewRoutes = router;
