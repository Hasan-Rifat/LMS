"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// admin
router.post("/crete-course");
router.patch("/update-course/:id");
// user
router.get("/get-course/:id"
/*
don't show
- courseData.video
- courseData.suggestion
- courseData.question
- courseData.links
*/
);
router.post("/get-course-content/:id"
/*
  after user purchased course
*/
);
router.get("/get-all-courses"
/*
get all course without purchased

*/
);
router.post("/add-question/" /* user add a questions */);
router.post("/add-answer/:id" /* admin add a answer */);
router.post("/add-review/" /* after buy a course then user can review */);
