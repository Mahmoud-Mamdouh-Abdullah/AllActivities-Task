"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRouter = void 0;
var express_1 = __importDefault(require("express"));
var APIController_1 = require("../Controllers/APIController");
var APIRouter = /** @class */ (function () {
    function APIRouter() {
    }
    APIRouter.prototype.getPath = function () {
        return '/api';
    };
    APIRouter.prototype.getRouter = function () {
        var router = express_1.default.Router();
        router.get('/records', APIController_1.all);
        router.post('/records', APIController_1.addRecord);
        return router;
    };
    return APIRouter;
}());
exports.APIRouter = APIRouter;
