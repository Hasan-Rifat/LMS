import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import bcrypt from "bcrypt";

import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { JwtPayload, Secret } from "jsonwebtoken";
import generateActivateToken from "../../../shared/generateActivateToken";
// create users
const registration = async (
  data: User
): Promise<{
  accessToken: string;
  refreshToken: string;
  activationCode: string;
  code: number;
  user: User;
}> => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (userExists) {
    throw new ApiError(httpStatus.FORBIDDEN, "User already exists");
  }

  data.password = await bcrypt.hash(
    data.password,
    Number(config.bcrypt_salt_rounds)
  );

  const user = await prisma.user.create({
    data,
  });

  if (!user) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "User not created");
  }

  const { code, activationCode } = generateActivateToken(user);

  // access token generate
  const accessToken = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // refresh token generate
  const refreshToken = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    activationCode,
    code,
    user,
  };
};

const login = async (
  data: User
): Promise<{
  accessToken: string;
  refreshToken: string;
  user: User;
}> => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.FORBIDDEN, "User not found");
  }

  const isPasswordMatch = await bcrypt.compare(data.password, user.password);

  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.FORBIDDEN, "credentials not match");
  }

  // access token generate
  const accessToken = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // refresh token generate
  const refreshToken = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    user,
  };
};

const activateUser = async (token: string, code: number): Promise<User> => {
  const user = jwtHelpers.verifyToken(
    token,
    config.jwt.activation_code as Secret
  );

  if (user.code !== code) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid code");
  }

  if (!user) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid token");
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.user.id,
    },
    data: {
      isVerified: true,
    },
  });

  return updatedUser;
};

const refresh = async (
  token: string
): Promise<{
  accessToken: string;
  refreshToken: string;
  user: JwtPayload;
}> => {
  const user = jwtHelpers.verifyToken(
    token,
    config.jwt.refresh_secret as Secret
  );

  if (!user) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid token");
  }

  const accessToken = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    user,
  };
};

const getProfile = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};

const updatePassword = async (
  data: JwtPayload,
  payload: {
    oldPassword: string;
    newPassword: string;
  }
): Promise<{ message: string }> => {
  // user exists
  const user = await prisma.user.findUnique({
    where: {
      id: data.id,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  // password match
  const isPasswordMatch = await bcrypt.compare(
    payload.oldPassword,
    user.password
  );

  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.FORBIDDEN, "Password not match");
  }

  // update password
  const updatedUser = await prisma.user.update({
    where: {
      id: data.id,
    },
    data: {
      password: await bcrypt.hash(
        payload.newPassword,
        Number(config.bcrypt_salt_rounds)
      ),
    },
  });

  const message = "Password updated successfully";

  return { message };
};

// get all users
const getAllFromDB = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

// get user by id
const getByIdFromDB = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

// update user
const updateOneInDB = async (id: string, data: User): Promise<User> => {
  return prisma.user.update({
    where: {
      id,
    },
    data,
  });
};

// delete user
const deleteByIdFromDB = async (id: string): Promise<User> => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

export const UserService = {
  login,
  refresh,
  registration,
  getProfile,
  updatePassword,
  activateUser,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
