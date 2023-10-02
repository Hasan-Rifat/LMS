import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { Notification } from "@prisma/client";

const getNotification = async (): Promise<Notification[]> => {
  const data = prisma.notification.findMany();
  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Notification not found");

  return data;
};

const getNotificationById = async (
  id: string
): Promise<Notification | null> => {
  const data = prisma.notification.findUnique({
    where: {
      id,
    },
  });

  if (!data) throw new ApiError(httpStatus.NOT_FOUND, "Notification not found");

  return data;
};

const createNotification = async (
  data: Notification
): Promise<Notification> => {
  const newData = prisma.notification.create({
    data,
  });

  if (!newData)
    throw new ApiError(httpStatus.NOT_FOUND, "Notification not found");

  return newData;
};

const updateNotification = async (
  id: string,
  data: Notification
): Promise<Notification> => {
  const newData = prisma.notification.update({
    where: {
      id,
    },
    data,
  });

  if (!newData)
    throw new ApiError(httpStatus.NOT_FOUND, "Notification not found");

  return newData;
};

const deleteNotification = async (id: string): Promise<Notification> => {
  const result = prisma.notification.delete({
    where: {
      id,
    },
  });

  if (!result)
    throw new ApiError(httpStatus.NOT_FOUND, "Notification not found");

  return result;
};

export const NotificationService = {
  getNotification,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};
