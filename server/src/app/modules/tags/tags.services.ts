import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Tags } from "@prisma/client";

const getTags = async (): Promise<Tags[]> => {
  const data = prisma.tags.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Tag not found");

  return data;
};

const getTagsById = async (id: string): Promise<Tags | null> => {
  const data = prisma.tags.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Tag not found");

  return data;
};

const createTags = async (data: Tags): Promise<Tags> => {
  const newData = prisma.tags.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Tag not found");

  return newData;
};

const updateTags = async (id: string, data: Tags): Promise<Tags> => {
  const newData = prisma.tags.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Tag not found");

  return newData;
};

const deleteTags = async (id: string): Promise<Tags> => {
  const result = prisma.tags.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Tag not found");

  return result;
};

export const TagsService = {
  getTags,
  getTagsById,
  createTags,
  updateTags,
  deleteTags,
};
