"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.default.Router();
router.route('/').get(users_controller_1.getUsers).post(users_controller_1.createUser);
router.route('/:id').put(users_controller_1.updateUser).delete(users_controller_1.deleteUser);
exports.default = router;
