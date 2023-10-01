import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { CourseData } from "@prisma/client";

const getCourse = async (courseId: string): Promise<CourseData | null> => {
  // check if user has bought this course

  /* 
  
  don't show
- courseData.video
- courseData.suggestion
- courseData.question
- courseData.links

  */
  const isExist = await prisma.courseData.findUnique({
    where: {
      id: courseId,
    },
  });
  return isExist;
};
const createContent = async (data: CourseData): Promise<CourseData> => {
  const content = await prisma.courseData.create({
    data,
  });
  return content;
};

const buyACourse = async (courseId: string, user: JwtPayload) => {
  // check if user has bought this course
  const isExist = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Course not found");
  }
};

export const CourseContentService = {
  buyACourse,
  getCourse,
  createContent,
};
