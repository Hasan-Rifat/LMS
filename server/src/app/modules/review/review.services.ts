import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Review } from "@prisma/client";

const getReviews = async (): Promise<Review[]> => {
  const data = prisma.review.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Review not found");

  return data;
};

const getReviewsById = async (id: string): Promise<Review | null> => {
  const data = prisma.review.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Review not found");

  return data;
};

const createReviews = async (data: Review): Promise<Review> => {
  const newData = prisma.review.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Review not found");

  return newData;
};

const updateReviews = async (id: string, data: Review): Promise<Review> => {
  const newData = prisma.review.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Review not found");

  return newData;
};

const deleteReviews = async (id: string): Promise<Review> => {
  const result = prisma.review.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Review not found");

  return result;
};

export const ReviewService = {
  getReviews,
  getReviewsById,
  createReviews,
  updateReviews,
  deleteReviews,
};
