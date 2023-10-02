import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CourseContentService } from "./courseContent.services";
import { JwtPayload } from "jsonwebtoken";

const getCourse = catchAsync(async (req, res) => {
  const result = await CourseContentService.getCourse(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get course by id",
    data: result,
    success: true,
  });
});

const getCourseForUser = catchAsync(async (req, res) => {
  const result = await CourseContentService.getCourseForUser(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get course by id",
    data: result,
    success: true,
  });
});

const createContent = catchAsync(async (req, res) => {
  const result = await CourseContentService.createContent(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Course content created",
    data: result,
    success: true,
  });
});

const buyACourse = catchAsync(async (req, res) => {
  const user = req?.user;
  const result = await CourseContentService.buyACourse(
    req.params.id,
    user as JwtPayload,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Buy a course",
    data: result,
    success: true,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const result = await CourseContentService.updateCourse(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Update course",
    data: result,
    success: true,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const result = await CourseContentService.deleteCourse(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Delete course",
    data: result,
    success: true,
  });
});

export const CourseContentController = {
  buyACourse,
  getCourse,
  createContent,
  getCourseForUser,
  updateCourse,
  deleteCourse,
};
