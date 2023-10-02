import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FaqService } from "./faq.services";

const getFaq = catchAsync(async (req, res) => {
  const result = await FaqService.getFaq();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Faq",
    data: result,
    success: true,
  });
});

const getFaqById = catchAsync(async (req, res) => {
  const result = await FaqService.getFaqById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Faq by id",
    data: result,
    success: true,
  });
});

const createFaq = catchAsync(async (req, res) => {
  const result = await FaqService.createFaq(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Faq created",
    data: result,
    success: true,
  });
});

const updateFaq = catchAsync(async (req, res) => {
  const result = await FaqService.updateFaq(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Faq updated",
    data: result,
    success: true,
  });
});

const deleteFaq = catchAsync(async (req, res) => {
  const result = await FaqService.deleteFaq(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Faq deleted",
    data: result,
    success: true,
  });
});

export const FaqController = {
  getFaq,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
};
