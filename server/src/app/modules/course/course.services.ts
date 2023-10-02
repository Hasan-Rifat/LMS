import { Course } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import cloudinary from "../../../shared/cloudinary";

const createCourse = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
    include: {
      benefit: true,
      category: true,
      comment: true,
      prerequisite: true,
      courseData: true,
      review: true,
      tag: true,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Course not created");

  return result;
};

const getAllCourse = async (): Promise<Course[]> => {
  const result = await prisma.course.findMany({
    include: {
      benefit: true,
      category: true,
      comment: true,
      prerequisite: true,
      courseData: true,
      review: true,
      tag: true,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Courses not found");

  return result;
};

const getCourseById = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      benefit: true,
      category: true,
      comment: true,
      prerequisite: true,
      courseData: true,
      review: true,
      tag: true,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Course not found");

  return result;
};

const updateCourse = async (id: string, data: Course): Promise<Course> => {
  const result = await prisma.course.update({
    where: {
      id,
    },
    data,
    include: {
      benefit: true,
      category: true,
      comment: true,
      prerequisite: true,
      courseData: true,
      review: true,
      tag: true,
    },
  });

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Course not found");

  return result;
};

const deleteCourse = async (id: string): Promise<Course> => {
  const course = await prisma.course.findUnique({
    where: {
      id,
    },
  });

  if (!course) throw new ApiError(httpStatus.NOT_FOUND, "Course not found");

  await cloudinary.uploader.destroy(course.public_id);

  const result = await prisma.course.delete({
    where: {
      id,
    },
    include: {
      benefit: true,
      category: true,
      comment: true,
      prerequisite: true,
      courseData: true,
      review: true,
      tag: true,
    },
  });

  return result;
};

export const CourseService = {
  createCourse,
  getAllCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
};
