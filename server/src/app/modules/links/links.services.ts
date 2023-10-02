import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Links } from "@prisma/client";

const getLinks = async (): Promise<Links[]> => {
  const data = prisma.links.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Links not found");

  return data;
};

const getLinksById = async (id: string): Promise<Links | null> => {
  const data = prisma.links.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Links not found");

  return data;
};

const createLinks = async (data: Links): Promise<Links> => {
  const newData = prisma.links.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Links not found");

  return newData;
};

const updateLinks = async (id: string, data: Links): Promise<Links> => {
  const newData = prisma.links.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Links not found");

  return newData;
};

const deleteLinks = async (id: string): Promise<Links> => {
  const result = prisma.links.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Links not found");

  return result;
};

export const LinksService = {
  getLinks,
  getLinksById,
  createLinks,
  updateLinks,
  deleteLinks,
};
