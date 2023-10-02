import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Course, CourseData, Order } from "@prisma/client";

const getCourse = async (courseId: string): Promise<CourseData | null> => {
  const isExist = await prisma.courseData.findUnique({
    where: {
      id: courseId,
    },
    include: {
      course: true,
      links: true,
      question: true,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Course not found");
  }

  return isExist;
};
const createContent = async (data: CourseData): Promise<CourseData> => {
  const content = await prisma.courseData.create({
    data,
    include: {
      course: true,
      links: true,
      question: true,
    },
  });

  if (!content) throw new ApiError(httpStatus.NOT_FOUND, "Content not found");

  return content;
};

const getCourseForUser = async (courseId: string): Promise<Course | null> => {
  const isExist = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      courseData: {
        select: {
          id: true,
          title: true,
          description: true,
        },
      },
      benefit: true,
      category: true,
      prerequisite: true,
      comment: true,
      review: true,
      tag: true,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Course not found");
  }

  return isExist;
};

const buyACourse = async (
  courseId: string,
  user: JwtPayload,
  paymentInfo: Order
): Promise<Order> => {
  // check if user has bought this course
  const isExist = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Course not found");
  }

  // check user all ready enroll this course or not
  const isEnroll = await prisma.order.findFirst({
    where: {
      userId: user.id,
      couserId: courseId,
    },
  });

  if (isEnroll) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "User already enroll this course"
    );
  }

  // create order
  const order = await prisma.order.create({
    data: {
      couserId: courseId,
      userId: user.id,
      paymentInfo: paymentInfo as any,
    },
  });

  return order;
};

const updateCourse = async (
  id: string,
  payload: CourseData
): Promise<CourseData> => {
  const course = await prisma.courseData.update({
    where: {
      id,
    },
    data: payload,
  });

  if (!course) throw new ApiError(httpStatus.NOT_FOUND, "Course not found");

  return course;
};

const deleteCourse = async (id: string): Promise<CourseData> => {
  const course = await prisma.courseData.delete({
    where: {
      id,
    },
  });

  if (!course) throw new ApiError(httpStatus.NOT_FOUND, "Course not found");

  return course;
};

export const CourseContentService = {
  buyACourse,
  getCourse,
  createContent,
  getCourseForUser,
  updateCourse,
  deleteCourse,
};
