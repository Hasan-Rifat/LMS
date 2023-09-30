import { Course } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCourse = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
  });

  return result;
};

const getAllCourse = async (): Promise<Course[]> => {
  const result = await prisma.course.findMany();

  return result;
};

const getCourseById = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateCourse = async (id: string, data: Course): Promise<Course> => {
  const result = await prisma.course.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

const deleteCourse = async (id: string): Promise<Course> => {
  const result = await prisma.course.delete({
    where: {
      id,
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
