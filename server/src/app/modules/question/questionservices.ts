import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Question, QuestionReplay } from "@prisma/client";

const getQuestion = async (): Promise<Question[]> => {
  const data = prisma.question.findMany({
    include: {
      questionReplay: true,
    },
  });
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return data;
};

const getQuestionById = async (id: string): Promise<Question | null> => {
  const data = prisma.question.findUnique({
    where: {
      id,
    },
    include: {
      questionReplay: true,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return data;
};

const createQuestion = async (data: Question): Promise<Question> => {
  const newData = prisma.question.create({
    data,
    include: {
      questionReplay: true,
    },
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
    include: {
      questionReplay: true,
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
    include: {
      questionReplay: true,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return result;
};

const answerQuestion = async (
  id: string,
  data: QuestionReplay
): Promise<QuestionReplay> => {
  const question = prisma.question.findUnique({
    where: {
      id,
    },
  });

  if (!question) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  const newData = prisma.questionReplay.create({
    data,
  });

  if (!newData) throw new ApiError(httpStatus.NOT_FOUND, "Question not found");

  return newData;
};

export const QuestionService = {
  answerQuestion,
  getQuestion,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
