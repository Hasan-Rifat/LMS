import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { LinksService } from "./links.services";

const getLinks = catchAsync(async (req, res) => {
  const result = await LinksService.getLinks();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Links",
    data: result,
    success: true,
  });
});

const getLinksById = catchAsync(async (req, res) => {
  const result = await LinksService.getLinksById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Links by id",
    data: result,
    success: true,
  });
});

const createLinks = catchAsync(async (req, res) => {
  const result = await LinksService.createLinks(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Links created",
    data: result,
    success: true,
  });
});

const updateLinks = catchAsync(async (req, res) => {
  const result = await LinksService.updateLinks(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Links updated",
    data: result,
    success: true,
  });
});

const deleteLinks = catchAsync(async (req, res) => {
  const result = await LinksService.deleteLinks(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Links deleted",
    data: result,
    success: true,
  });
});

export const LinksController = {
  getLinks,
  getLinksById,
  createLinks,
  updateLinks,
  deleteLinks,
};
