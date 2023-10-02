import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { NotificationService } from "./notification.services";

const getNotification = catchAsync(async (req, res) => {
  const result = await NotificationService.getNotification();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Notification",
    data: result,
    success: true,
  });
});

const getNotificationById = catchAsync(async (req, res) => {
  const result = await NotificationService.getNotificationById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Notification by id",
    data: result,
    success: true,
  });
});

const createNotification = catchAsync(async (req, res) => {
  const result = await NotificationService.createNotification(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Notification created",
    data: result,
    success: true,
  });
});

const updateNotification = catchAsync(async (req, res) => {
  const result = await NotificationService.updateNotification(
    req.params.id,
    req.body
  );

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Notification updated",
    data: result,
    success: true,
  });
});

const deleteNotification = catchAsync(async (req, res) => {
  const result = await NotificationService.deleteNotification(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Notification deleted",
    data: result,
    success: true,
  });
});

export const NotificationController = {
  getNotification,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};
