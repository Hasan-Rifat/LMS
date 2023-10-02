import express from "express";
import { QuestionController } from "./question.controller";

const router = express.Router();

router.get("/", QuestionController.getQuestion);
router.get("/:id", QuestionController.getQuestionById);
router.post("/", QuestionController.createQuestion);
router.patch("/:id", QuestionController.updateQuestion);
router.delete("/:id", QuestionController.deleteQuestion);

export const QuestionRoutes = router;
