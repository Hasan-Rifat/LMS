import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReviewService } from "./review.services";

const getReview = catchAsync(async (req, res) => {
  const result = await ReviewService.getReviews();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Review",
    data: result,
    success: true,
  });
});

const getReviewById = catchAsync(async (req, res) => {
  const result = await ReviewService.getReviewsById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Review by id",
    data: result,
    success: true,
  });
});

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewService.createReviews(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Review created",
    data: result,
    success: true,
  });
});

const updateReview = catchAsync(async (req, res) => {
  const result = await ReviewService.updateReviews(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Review updated",
    data: result,
    success: true,
  });
});

const deleteReview = catchAsync(async (req, res) => {
  const result = await ReviewService.deleteReviews(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Review deleted",
    data: result,
    success: true,
  });
});

export const ReviewController = {
  getReview,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
