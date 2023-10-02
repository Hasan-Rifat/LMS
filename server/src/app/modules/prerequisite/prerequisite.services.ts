import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Prerequisite } from "@prisma/client";

const getPrerequisite = async (): Promise<Prerequisite[]> => {
  const data = prisma.prerequisite.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Prerequisite not found");

  return data;
};

const getPrerequisiteById = async (
  id: string
): Promise<Prerequisite | null> => {
  const data = prisma.prerequisite.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Prerequisite not found");

  return data;
};

const createPrerequisite = async (
  data: Prerequisite
): Promise<Prerequisite> => {
  const newData = prisma.prerequisite.create({
    data,
  });

  if (!newData)
    throw new ApiError(httpStatus.NOT_FOUND, "Prerequisite not found");

  return newData;
};

const updatePrerequisite = async (
  id: string,
  data: Prerequisite
): Promise<Prerequisite> => {
  const newData = prisma.prerequisite.update({
    where: {
      id,
    },
    data,
  });

  if (!newData)
    throw new ApiError(httpStatus.NOT_FOUND, "Prerequisite not found");

  return newData;
};

const deletePrerequisite = async (id: string): Promise<Prerequisite> => {
  const result = prisma.prerequisite.delete({
    where: {
      id,
    },
  });

  if (!result)
    throw new ApiError(httpStatus.NOT_FOUND, "Prerequisite not found");

  return result;
};

export const PrerequisiteService = {
  getPrerequisite,
  getPrerequisiteById,
  createPrerequisite,
  updatePrerequisite,
  deletePrerequisite,
};
