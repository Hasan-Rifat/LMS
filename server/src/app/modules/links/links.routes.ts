import express from "express";
import { LinksController } from "./links.controller";

const router = express.Router();

router.get("/", LinksController.getLinks);
router.get("/:id", LinksController.getLinksById);
router.post("/", LinksController.createLinks);
router.patch("/:id", LinksController.updateLinks);
router.delete("/:id", LinksController.deleteLinks);

export const LinksRoutes = router;
