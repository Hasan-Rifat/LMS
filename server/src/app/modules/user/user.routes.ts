import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../constants/user";

const router = express.Router();

router.get("/", auth(ENUM_USER_ROLE.ADMIN), UserControllers.getAllFromDB);

router.post("/login", UserControllers.login);
router.post(
  "/logout",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserControllers.logOut
);
router.post(
  "/registration",
  validateRequest(UserValidation.registration),
  UserControllers.registration
);
router.post(
  "/refresh",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserControllers.refresh
);
router.get(
  "/get-profile",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserControllers.getProfile
);
router.post("/activate-user", UserControllers.activateUser);

router.post(
  "/update-password",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserControllers.updatePassword
);

router.get(
  "/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserControllers.getByIdFromDB
);
router.patch(
  "/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.update),
  UserControllers.updateOneInDB
);
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  UserControllers.deleteByIdFromDB
);

export const UserRoutes = router;
