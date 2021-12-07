"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var Server_1 = require("./Core/Server");
var APIRouter_1 = require("./Routers/APIRouter");
/**
 * dotenv configuration
 */
dotenv_1.default.config();
var server = new Server_1.Server();
/**
 * add api router
 */
server.addRouter(new APIRouter_1.APIRouter());
/**
 * listen to the server on port 3001
 */
server.listen(process.env.PORT || 3001);
