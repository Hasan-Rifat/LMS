import { User } from "@prisma/client";
import { jwtHelpers } from "../helpers/jwtHelpers";
import { Secret } from "jsonwebtoken";
import config from "../config";

const generateActivateToken = (user: User) => {
  const code = Math.floor(100000 + Math.random() * 900000);

  const activationCode = jwtHelpers.createToken(
    { user, code },
    config.jwt.activation_code as Secret,
    config.jwt.activation_expires_in as string
  );

  return { activationCode, code };
};

export default generateActivateToken;
