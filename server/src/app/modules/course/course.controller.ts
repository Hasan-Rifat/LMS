import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CourseService } from "./course.services";
import cloudinary from "../../../shared/cloudinary";

const createCourse = catchAsync(async (req, res) => {
  // image upload

  if (req.body.thumbnail) {
    const uploadResult = await cloudinary.uploader.upload(req.body.thumbnail, {
      folder: "/course",
    });

    req.body.thumbnail = {
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    };
  }
  console.log(req.body);
  const result = await CourseService.createCourse(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Course created",
    data: result,
    success: true,
  });
});

const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseService.getAllCourse();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get all courses",
    data: result,
    success: true,
  });
});

const getCourseById = catchAsync(async (req, res) => {
  const result = await CourseService.getCourseById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get course by id",
    data: result,
    success: true,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const result = await CourseService.updateCourse(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Update course",
    data: result,
    success: true,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const result = await CourseService.deleteCourse(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "delete Course course",
    data: result,
    success: true,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
};
