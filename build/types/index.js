"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStates = void 0;
var LoadStates;
(function (LoadStates) {
    LoadStates[LoadStates["NOT_LOADED"] = 0] = "NOT_LOADED";
    LoadStates[LoadStates["ERROR"] = 1] = "ERROR";
    LoadStates[LoadStates["LOADING"] = 2] = "LOADING";
    LoadStates[LoadStates["SUCCESS"] = 3] = "SUCCESS";
})(LoadStates = exports.LoadStates || (exports.LoadStates = {}));
