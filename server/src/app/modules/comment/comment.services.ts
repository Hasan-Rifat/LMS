import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Comment, CommentReplayForUser } from "@prisma/client";

const getComments = async (): Promise<Comment[]> => {
  const data = prisma.comment.findMany({
    include: {
      commentReplayForUser: true,
    },
  });
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return data;
};

const getCommentsById = async (id: string): Promise<Comment | null> => {
  const data = prisma.comment.findUnique({
    where: {
      id,
    },
    include: {
      commentReplayForUser: true,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return data;
};

const createComments = async (data: Comment): Promise<Comment> => {
  const newData = prisma.comment.create({
    data,
    include: {
      commentReplayForUser: true,
    },
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
    include: {
      commentReplayForUser: true,
    },
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return newData;
};

const deleteComments = async (id: string): Promise<Comment> => {
  const result = prisma.comment.delete({
    where: {
      id,
    },
    include: {
      commentReplayForUser: true,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  return result;
};

const replayComments = async (
  id: string,
  data: CommentReplayForUser
): Promise<CommentReplayForUser> => {
  // check if comment exist
  const comment = await prisma.comment.findUnique({
    where: {
      id,
    },
    include: {
      commentReplayForUser: true,
    },
  });

  // not found comment
  if (!comment) throw new ApiError(httpStatus.NOT_FOUND, "Comment not found");

  // create replay comment
  const replayComment = await prisma.commentReplayForUser.create({
    data: {
      commentId: data.commentId,
      userId: data.userId,
      reply: data.reply,
    },
  });

  console.log(replayComment);

  return replayComment;
};

export const CommentService = {
  getComments,
  getCommentsById,
  createComments,
  updateComments,
  deleteComments,
  replayComments,
};
