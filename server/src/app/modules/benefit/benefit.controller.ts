import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import cloudinary from "../../../shared/cloudinary";
import { BenefitService } from "./benefit.services";

const getBenefit = catchAsync(async (req, res) => {
  const result = await BenefitService.getBenefit();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Benefit",
    data: result,
    success: true,
  });
});

const getBenefitById = catchAsync(async (req, res) => {
  const result = await BenefitService.getBenefitById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Benefit by id",
    data: result,
    success: true,
  });
});

const createBenefit = catchAsync(async (req, res) => {
  const result = await BenefitService.createBenefit(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Benefit created",
    data: result,
    success: true,
  });
});

const updateBenefit = catchAsync(async (req, res) => {
  const result = await BenefitService.updateBenefit(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Benefit updated",
    data: result,
    success: true,
  });
});

const deleteBenefit = catchAsync(async (req, res) => {
  const result = await BenefitService.deleteBenefit(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Benefit deleted",
    data: result,
    success: true,
  });
});

export const BenefitController = {
  getBenefit,
  getBenefitById,
  createBenefit,
  updateBenefit,
  deleteBenefit,
};
