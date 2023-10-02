import { Avatar } from "@prisma/client";
import prisma from "../../../shared/prisma";
import cloudinary from "../../../shared/cloudinary";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const getAvatar = async (): Promise<Avatar[]> => {
  return prisma.avatar.findMany();
};

const getAvatarById = async (id: string): Promise<Avatar | null> => {
  const data = prisma.avatar.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Avatar not found");

  return data;
};

const createAvatar = async (data: Avatar): Promise<Avatar> => {
  const newData = prisma.avatar.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Avatar not found");

  return newData;
};

const updateAvatar = async (id: string, data: Avatar): Promise<Avatar> => {
  const newData = prisma.avatar.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Avatar not found");

  return newData;
};

const deleteAvatar = async (id: string): Promise<Avatar> => {
  const avatar = await prisma.avatar.findUnique({
    where: {
      id,
    },
  });

  if (!avatar) throw new ApiError(httpStatus.NOT_FOUND, "Avatar not found");

  await await cloudinary.uploader.destroy(avatar.public_id);

  const result = prisma.avatar.delete({
    where: {
      id,
    },
  });

  return result;
};

export const AvatarService = {
  getAvatar,
  getAvatarById,
  createAvatar,
  updateAvatar,
  deleteAvatar,
};
