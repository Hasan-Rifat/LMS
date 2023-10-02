import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { CourseRoutes } from "../modules/course/course.routes";
import { CourseContentRoutes } from "../modules/courseContent/courseContent.routes";
import { OrderRoutes } from "../modules/order/order.routes";
import { AvatarRoutes } from "../modules/avatar/avatar.routes";
import { CategoryRoutes } from "../modules/category/category.routes";
import { BenefitRoutes } from "../modules/benefit/benefit.routes";
import { TagsRoutes } from "../modules/tags/tags.routes";
import { FaqRoutes } from "../modules/faq/faq.routes";
import { LinksRoutes } from "../modules/links/links.routes";
import { NotificationRoutes } from "../modules/notification/notification.routes";
import { QuestionRoutes } from "../modules/question/question.routes";
import { CommentRoutes } from "../modules/comment/comments.routes";
import { ReviewRoutes } from "../modules/review/review.routes";

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
  {
    path: "/order",
    route: OrderRoutes,
  },
  {
    path: "/avatar",
    route: AvatarRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/benefit",
    route: BenefitRoutes,
  },
  {
    path: "/tags",
    route: TagsRoutes,
  },
  {
    path: "/faq",
    route: FaqRoutes,
  },
  {
    path: "/links",
    route: LinksRoutes,
  },
  {
    path: "/notification",
    route: NotificationRoutes,
  },
  {
    path: "/question",
    route: QuestionRoutes,
  },
  {
    path: "/comment",
    route: CommentRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
