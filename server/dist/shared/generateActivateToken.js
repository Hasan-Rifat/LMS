"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwtHelpers_1 = require("../helpers/jwtHelpers");
const config_1 = __importDefault(require("../config"));
const generateActivateToken = (user) => {
    const code = Math.floor(100000 + Math.random() * 900000);
    const activationCode = jwtHelpers_1.jwtHelpers.createToken({ user, code }, config_1.default.jwt.activation_code, config_1.default.jwt.activation_expires_in);
    return { activationCode, code };
};
exports.default = generateActivateToken;
