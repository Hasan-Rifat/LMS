import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PrerequisiteService } from "./prerequisite.services";

const getPrerequisite = catchAsync(async (req, res) => {
  const result = await PrerequisiteService.getPrerequisite();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Prerequisite",
    data: result,
    success: true,
  });
});

const getPrerequisiteById = catchAsync(async (req, res) => {
  const result = await PrerequisiteService.getPrerequisiteById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Prerequisite by id",
    data: result,
    success: true,
  });
});

const createPrerequisite = catchAsync(async (req, res) => {
  const result = await PrerequisiteService.createPrerequisite(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Prerequisite created",
    data: result,
    success: true,
  });
});

const updatePrerequisite = catchAsync(async (req, res) => {
  const result = await PrerequisiteService.updatePrerequisite(
    req.params.id,
    req.body
  );

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Prerequisite updated",
    data: result,
    success: true,
  });
});

const deletePrerequisite = catchAsync(async (req, res) => {
  const result = await PrerequisiteService.deletePrerequisite(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Prerequisite deleted",
    data: result,
    success: true,
  });
});

export const PrerequisiteController = {
  getPrerequisite,
  getPrerequisiteById,
  createPrerequisite,
  updatePrerequisite,
  deletePrerequisite,
};
