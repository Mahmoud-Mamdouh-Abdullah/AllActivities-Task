import express, { IRouter } from "express";
import { all, addRecord } from "../Controllers/APIController";
import { RouterInterface } from "../Core/Interfaces/RouterInterface";


export class APIRouter implements RouterInterface {
    getPath(): string {
        return '/api';
    }
    getRouter(): IRouter {
        const router = express.Router();

        router.get('/records', all);
        router.post('/records', addRecord);

        return router;
    }
}