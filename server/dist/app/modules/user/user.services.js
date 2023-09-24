"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const generateActivateToken_1 = __importDefault(require("../../../shared/generateActivateToken"));
// create users
const registration = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield prisma_1.default.user.findUnique({
        where: {
            email: data.email,
        },
    });
    if (userExists) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "User already exists");
    }
    data.password = yield bcrypt_1.default.hash(data.password, Number(config_1.default.bcrypt_salt_rounds));
    const user = yield prisma_1.default.user.create({
        data,
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "User not created");
    }
    const { code, activationCode } = (0, generateActivateToken_1.default)(user);
    // access token generate
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ id: user.id, email: user.email, role: user.role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    // refresh token generate
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ id: user.id, email: user.email, role: user.role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
        activationCode,
        code,
        user,
    };
});
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            email: data.email,
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "User not found");
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(data.password, user.password);
    if (!isPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "credentials not match");
    }
    // access token generate
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ id: user.id, email: user.email, role: user.role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    // refresh token generate
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ id: user.id, email: user.email, role: user.role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
        user,
    };
});
const activateUser = (token, code) => __awaiter(void 0, void 0, void 0, function* () {
    const user = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.activation_code);
    if (user.code !== code) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Invalid code");
    }
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Invalid token");
    }
    const updatedUser = yield prisma_1.default.user.update({
        where: {
            id: user.user.id,
        },
        data: {
            isVerified: true,
        },
    });
    return updatedUser;
});
const refresh = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Invalid token");
    }
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ id: user.id, email: user.email, role: user.role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return {
        accessToken,
        user,
    };
});
const getProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    return user;
});
const updatePassword = (data, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // user exists
    const user = yield prisma_1.default.user.findUnique({
        where: {
            id: data.id,
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    // password match
    const isPasswordMatch = yield bcrypt_1.default.compare(payload.oldPassword, user.password);
    if (!isPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Password not match");
    }
    // update password
    const updatedUser = yield prisma_1.default.user.update({
        where: {
            id: data.id,
        },
        data: {
            password: yield bcrypt_1.default.hash(payload.newPassword, Number(config_1.default.bcrypt_salt_rounds)),
        },
    });
    const message = "Password updated successfully";
    return { message };
});
// get all users
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.user.findMany();
});
// get user by id
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
});
// update user
const updateOneInDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.user.update({
        where: {
            id,
        },
        data,
    });
});
// delete user
const deleteByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.user.delete({
        where: {
            id,
        },
    });
});
exports.UserService = {
    login,
    refresh,
    registration,
    getProfile,
    updatePassword,
    activateUser,
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
};
