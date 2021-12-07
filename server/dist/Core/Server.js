"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this._server = (0, express_1.default)();
        this._server.use(express_1.default.json());
        this._server.use((0, cors_1.default)());
        this._server.get('/', function (req, res) {
            res.send({
                message: 'Server End Point'
            });
        });
    }
    Server.prototype.addRouter = function (router) {
        this._server.use(router.getPath(), router.getRouter());
    };
    Server.prototype.listen = function (port) {
        this._server.listen(port, function () {
            console.log('server running ...');
            console.log("server listen on port ".concat(port));
        });
    };
    return Server;
}());
exports.Server = Server;
