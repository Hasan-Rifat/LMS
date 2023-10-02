import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Question } from "@prisma/client";

const getQuestion = async (): Promise<Question[]> => {
  const data = prisma.question.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return data;
};

const getQuestionById = async (id: string): Promise<Question | null> => {
  const data = prisma.question.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return data;
};

const createQuestion = async (data: Question): Promise<Question> => {
  const newData = prisma.question.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return newData;
};

const updateQuestion = async (
  id: string,
  data: Question
): Promise<Question> => {
  const newData = prisma.question.update({
    where: {
      id,
    },
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return newData;
};

const deleteQuestion = async (id: string): Promise<Question> => {
  const result = prisma.question.delete({
    where: {
      id,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return result;
};

export const QuestionService = {
  getQuestion,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
