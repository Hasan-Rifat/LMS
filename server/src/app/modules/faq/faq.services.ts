import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Faq } from "@prisma/client";

const getFaq = async (): Promise<Faq[]> => {
  const data = prisma.faq.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "FAQ not found");

  return data;
};

const getFaqById = async (id: string): Promise<Faq | null> => {
  const data = prisma.faq.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "FAQ not found");

  return data;
};

const createFaq = async (data: Faq): Promise<Faq> => {
  const newData = prisma.faq.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "FAQ not found");

  return newData;
};

const updateFaq = async (id: string, data: Faq): Promise<Faq> => {
  const newData = prisma.faq.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "FAQ not found");

  return newData;
};

const deleteFaq = async (id: string): Promise<Faq> => {
  const result = prisma.faq.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "FAQ not found");

  return result;
};

export const FaqService = {
  getFaq,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
};
