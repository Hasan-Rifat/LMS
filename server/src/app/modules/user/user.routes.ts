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
router.delete("/:id", UserControllers.deleteByIdFromDB);

/* 
userRouter.post("/socialAuth",socialAuth)
userRouter.put("/update-user-info",isAuthenticated,updateUserInfo)
userRouter.put("/update-user-password",isAuthenticated,updatePassword)
userRouter.put("/update-user-avatar",isAuthenticated,updateProfilePicture)
*/

export const UserRoutes = router;
