import express from "express";
import { QuestionController } from "./question.controller";

const router = express.Router();

router.get("/", QuestionController.getQuestion);
router.post("/", QuestionController.createQuestion);
router.post("/:id", QuestionController.answerQuestion);
router.get("/:id", QuestionController.getQuestionById);
router.patch("/:id", QuestionController.updateQuestion);
router.delete("/:id", QuestionController.deleteQuestion);

export const QuestionRoutes = router;
