import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { CourseRoutes } from "../modules/course/course.routes";
import { CourseContentRoutes } from "../modules/courseContent/courseContent.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/course",
    route: CourseRoutes,
  },
  {
    path: "/course-content",
    route: CourseContentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
