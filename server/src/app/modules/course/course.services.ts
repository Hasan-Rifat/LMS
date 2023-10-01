import { Course } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCourse = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
    include: {
      courseData: true,
      benefit: true,
      categories: true,
      prerequisite: true,
      question: true,
      review: true,
      tags: true,
    },
  });

  return result;
};

const getAllCourse = async (): Promise<Course[]> => {
  const result = await prisma.course.findMany({
    include: {
      courseData: true,
      benefit: true,
      categories: true,
      prerequisite: true,
      question: true,
      review: true,
      tags: true,
    },
  });

  return result;
};

const getCourseById = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      courseData: true,
      benefit: true,
      categories: true,
      prerequisite: true,
      question: true,
      review: true,
      tags: true,
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
    include: {
      courseData: true,
      benefit: true,
      categories: true,
      prerequisite: true,
      question: true,
      review: true,
      tags: true,
    },
  });

  return result;
};

const deleteCourse = async (id: string): Promise<Course> => {
  const result = await prisma.course.delete({
    where: {
      id,
    },
    include: {
      courseData: true,
      benefit: true,
      categories: true,
      prerequisite: true,
      question: true,
      review: true,
      tags: true,
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
