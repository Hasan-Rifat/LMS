import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CommentService } from "./comment.services";

const getComment = catchAsync(async (req, res) => {
  const result = await CommentService.getComments();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Comment",
    data: result,
    success: true,
  });
});

const getCommentById = catchAsync(async (req, res) => {
  const result = await CommentService.getCommentsById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Comment by id",
    data: result,
    success: true,
  });
});

const createComment = catchAsync(async (req, res) => {
  const result = await CommentService.createComments(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Comment created",
    data: result,
    success: true,
  });
});

const updateComment = catchAsync(async (req, res) => {
  const result = await CommentService.updateComments(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Comment updated",
    data: result,
    success: true,
  });
});

const deleteComment = catchAsync(async (req, res) => {
  const result = await CommentService.deleteComments(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Comment deleted",
    data: result,
    success: true,
  });
});

export const CommentController = {
  getComment,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
