import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AvatarService } from "./avatar.services";
import cloudinary from "../../../shared/cloudinary";

const getAvatar = catchAsync(async (req, res) => {
  const result = await AvatarService.getAvatar();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get avatar",
    data: result,
    success: true,
  });
});

const getAvatarById = catchAsync(async (req, res) => {
  const result = await AvatarService.getAvatarById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get avatar by id",
    data: result,
    success: true,
  });
});

const createAvatar = catchAsync(async (req, res) => {
  if (req.body.url) {
    const uploadResult = await cloudinary.uploader.upload(req.body.url, {
      folder: "/avatar",
    });
    req.body.url = uploadResult.secure_url;
    req.body.public_id = uploadResult.public_id;
  }

  const result = await AvatarService.createAvatar(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Avatar created",
    data: result,
    success: true,
  });
});

const updateAvatar = catchAsync(async (req, res) => {
  if (req.body.url) {
    // delete old image
    await cloudinary.uploader.destroy(req.body.public_id);

    const uploadResult = await cloudinary.uploader.upload(req.body.url, {
      folder: "/avatar",
    });
    req.body.url = uploadResult.secure_url;
    req.body.public_id = uploadResult.public_id;
  }

  const result = await AvatarService.updateAvatar(req.params.id, req.body);

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Avatar updated",
    data: result,
    success: true,
  });
});

const deleteAvatar = catchAsync(async (req, res) => {
  
  const result = await AvatarService.deleteAvatar(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Avatar deleted",
    data: result,
    success: true,
  });
});

export const AvatarController = {
  getAvatar,
  getAvatarById,
  createAvatar,
  updateAvatar,
  deleteAvatar,
};
