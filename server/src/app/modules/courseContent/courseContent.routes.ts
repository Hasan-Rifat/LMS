import express from "express";
import { CourseContentController } from "./courseContent.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../constants/user";

const router = express.Router();

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
  "/create-content",
  auth(ENUM_USER_ROLE.USER),
  /*
    only admin can create course content
*/ CourseContentController.createContent
);

router.post(
  "/get-course-content/:id",
  auth(ENUM_USER_ROLE.USER),
  /*
    after user purchased course then user can access course content
*/ CourseContentController.buyACourse
);

export const CourseContentRoutes = router;
