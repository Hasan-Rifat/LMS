import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { TagsService } from "./tags.services";

const getTags = catchAsync(async (req, res) => {
  const result = await TagsService.getTags();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Tags",
    data: result,
    success: true,
  });
});

const getTagsById = catchAsync(async (req, res) => {
  const result = await TagsService.getTagsById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Tags by id",
    data: result,
    success: true,
  });
});

const createTags = catchAsync(async (req, res) => {
  const result = await TagsService.createTags(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Tags created",
    data: result,
    success: true,
  });
});

const updateTags = catchAsync(async (req, res) => {
  const result = await TagsService.updateTags(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Tags updated",
    data: result,
    success: true,
  });
});

const deleteTags = catchAsync(async (req, res) => {
  const result = await TagsService.deleteTags(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Tags deleted",
    data: result,
    success: true,
  });
});

export const TagsController = {
  getTags,
  getTagsById,
  createTags,
  updateTags,
  deleteTags,
};
