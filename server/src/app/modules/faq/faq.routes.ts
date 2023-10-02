import express from "express";
import { FaqController } from "./faq.controller";

const router = express.Router();

router.get("/", FaqController.getFaq);
router.get("/:id", FaqController.getFaqById);
router.post("/", FaqController.createFaq);
router.patch("/:id", FaqController.updateFaq);
router.delete("/:id", FaqController.deleteFaq);

export const FaqRoutes = router;
