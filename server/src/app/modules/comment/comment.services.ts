import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Comment } from "@prisma/client";

const getComments = async (): Promise<Comment[]> => {
  const data = prisma.comment.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return data;
};

const getCommentsById = async (id: string): Promise<Comment | null> => {
  const data = prisma.comment.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return data;
};

const createComments = async (data: Comment): Promise<Comment> => {
  const newData = prisma.comment.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return newData;
};

const updateComments = async (id: string, data: Comment): Promise<Comment> => {
  const newData = prisma.comment.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return newData;
};

const deleteComments = async (id: string): Promise<Comment> => {
  const result = prisma.comment.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return result;
};

export const CommentService = {
  getComments,
  getCommentsById,
  createComments,
  updateComments,
  deleteComments,
};
