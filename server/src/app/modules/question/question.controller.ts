import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { QuestionService } from "./questionservices";

const getQuestion = catchAsync(async (req, res) => {
  const result = await QuestionService.getQuestion();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Question",
    data: result,
    success: true,
  });
});

const getQuestionById = catchAsync(async (req, res) => {
  const result = await QuestionService.getQuestionById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Question by id",
    data: result,
    success: true,
  });
});

const createQuestion = catchAsync(async (req, res) => {
  const result = await QuestionService.createQuestion(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Question created",
    data: result,
    success: true,
  });
});

const updateQuestion = catchAsync(async (req, res) => {
  const result = await QuestionService.updateQuestion(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Question updated",
    data: result,
    success: true,
  });
});

const deleteQuestion = catchAsync(async (req, res) => {
  const result = await QuestionService.deleteQuestion(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Question deleted",
    data: result,
    success: true,
  });
});

const answerQuestion = catchAsync(async (req, res) => {
  const result = await QuestionService.answerQuestion(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Question answered",
    data: result,
    success: true,
  });
});

export const QuestionController = {
  getQuestion,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  answerQuestion,
};
