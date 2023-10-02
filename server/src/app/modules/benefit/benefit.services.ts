import { Benefit } from "@prisma/client";
import prisma from "../../../shared/prisma";
import cloudinary from "../../../shared/cloudinary";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const getBenefit = async (): Promise<Benefit[]> => {
  const data = prisma.benefit.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Benefit not found");

  return data;
};

const getBenefitById = async (id: string): Promise<Benefit | null> => {
  const data = prisma.benefit.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Benefit not found");

  return data;
};

const createBenefit = async (data: Benefit): Promise<Benefit> => {
  const newData = prisma.benefit.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Benefit not found");

  return newData;
};

const updateBenefit = async (id: string, data: Benefit): Promise<Benefit> => {
  const newData = prisma.benefit.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Benefit not found");

  return newData;
};

const deleteBenefit = async (id: string): Promise<Benefit> => {
  const result = prisma.benefit.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Benefit not found");

  return result;
};

export const BenefitService = {
  getBenefit,
  getBenefitById,
  createBenefit,
  updateBenefit,
  deleteBenefit,
};
