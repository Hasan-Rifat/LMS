import express from "express";
import { CourseController } from "./course.controller";

const router = express.Router();

// admin
router.post("/add-review" /*  after buy a course then user can review */);
router.post(
  "/crete-course",
  /* admin create a course */ CourseController.createCourse
);

router.post("/add-question" /* user add a questions */);
router.get(
  "/get-all-courses",
  CourseController.getAllCourse
  /* 
get all course without purchased
*/
);
router.patch("/update-course/:id", CourseController.updateCourse);

// user
router.get(
  "/get-course/:id"
  /* 
don't show 
- courseData.video 
- courseData.suggestion
- courseData.question
- courseData.links
*/
);

router.post(
  "/get-course-content/:id"
  /* 
    after user purchased course 
*/
);

// delete course
router.delete(
  "/delete-course/:id",
  /* admin delete a course */ CourseController.deleteCourse
);

router.post("/add-answer/:id" /* admin add a answer */);

export const CourseRoutes = router;
