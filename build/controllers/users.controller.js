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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const axiosClient_1 = __importDefault(require("../api/axiosClient"));
const types_1 = require("../types");
const uuid_1 = require("uuid");
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield axiosClient_1.default.get('/users');
        if (!users)
            throw Error();
        const data = users.data;
        /* remove passwords */
        const usersData = data.map(({ id, name, lastName, email, role, password }) => ({
            id,
            name,
            lastName,
            email,
            role,
            password,
        }));
        res.status(200).json({
            status: types_1.LoadStates.SUCCESS,
            users: usersData,
            msg: 'success',
        });
    }
    catch (error) {
        const { message } = error;
        res.status(400).json({
            status: types_1.LoadStates.ERROR,
            msg: message,
        });
    }
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosClient_1.default.post('/users', Object.assign(Object.assign({}, req.body), { id: (0, uuid_1.v4)() }));
        if (!response)
            throw Error();
        res.status(200).json({
            status: types_1.LoadStates.SUCCESS,
            msg: 'successfully created',
        });
    }
    catch (error) {
        const { message } = error;
        res.status(400).json({
            status: types_1.LoadStates.ERROR,
            msg: message,
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosClient_1.default.put(`/users/${req.params.id}`, req.body);
        if (!response)
            throw Error();
        res.status(200).json({
            status: types_1.LoadStates.SUCCESS,
            msg: 'Successfully updated',
        });
    }
    catch (error) {
        const { message } = error;
        res.status(400).json({
            status: types_1.LoadStates.ERROR,
            msg: message,
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosClient_1.default.delete(`/users/${req.params.id}`, req.body);
        if (!response)
            throw Error();
        res.status(200).json({
            status: types_1.LoadStates.SUCCESS,
            msg: 'Successfully deleted',
        });
    }
    catch (error) {
        const { message } = error;
        res.status(400).json({
            status: types_1.LoadStates.ERROR,
            msg: message,
        });
    }
});
exports.deleteUser = deleteUser;
