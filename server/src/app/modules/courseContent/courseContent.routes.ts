import express from "express";
import { CourseContentController } from "./courseContent.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../constants/user";

const router = express.Router();

// user

router.post(
  "/create-content",
  auth(ENUM_USER_ROLE.USER),
  /*
    only admin can create course content
*/ CourseContentController.createContent
);

router.get("/get-course/:id", CourseContentController.getCourseForUser);

router.post(
  "/buy-a-course/:id",
  auth(ENUM_USER_ROLE.USER),
  /*
    after user purchased course then user can access course content
*/ CourseContentController.buyACourse
);

router.patch(
  "/update-course/:id",
  auth(ENUM_USER_ROLE.USER),
  CourseContentController.updateCourse
);

router.delete(
  "/delete-course/:id",
  auth(ENUM_USER_ROLE.USER),
  CourseContentController.deleteCourse
);
export const CourseContentRoutes = router;
