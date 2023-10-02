import express from "express";
import { BenefitController } from "./benefit.controller";

const router = express.Router();

router.get("/", BenefitController.getBenefit);
router.get("/:id", BenefitController.getBenefitById);
router.post("/", BenefitController.createBenefit);
router.patch("/:id", BenefitController.updateBenefit);
router.delete("/:id", BenefitController.deleteBenefit);

export const BenefitRoutes = router;
