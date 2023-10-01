import express from "express";
import { CourseController } from "./course.controller";

const router = express.Router();

// admin
router.post(
  "/crete-course",
  /* admin create a course */ CourseController.createCourse
);

router.get(
  "/get-all-courses",
  /* for all users */
  CourseController.getAllCourse
  /* 
get all course without purchased
*/
);

router.get(
  "/get-course/:id",
  /* for all users */
  CourseController.getCourseById
  /* 
get all course without purchased
*/
);

router.patch("/update-course/:id", CourseController.updateCourse);

// delete course
router.delete(
  "/delete-course/:id",
  /* admin delete a course */ CourseController.deleteCourse
);

export const CourseRoutes = router;
