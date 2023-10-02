import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const getCategory = async (): Promise<Category[]> => {
  const data = prisma.category.findMany();

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Category not found");

  return data;
};

const getCategoryById = async (id: string): Promise<Category | null> => {
  const data = prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  return data;
};

const createCategory = async (payload: Category): Promise<Category> => {
  const data = prisma.category.create({
    data: payload,
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Category not found");

  return data;
};

const updateCategory = async (
  id: string,
  data: Category
): Promise<Category> => {
  const result = prisma.category.update({
    where: {
      id,
    },
    data,
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Category not found");

  return result;
};

const deleteCategory = async (id: string): Promise<Category> => {
  const result = prisma.category.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Category not found");

  return result;
};

export const CategoryService = {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
