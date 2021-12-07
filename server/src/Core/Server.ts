import express, { Request, Response } from 'express';
import cors from 'cors';
import { RouterInterface } from './Interfaces/RouterInterface';

export class Server {
    private readonly _server = express();


    constructor() {
        this._server.use(express.json());
        this._server.use(cors());
        this._server.get('/', function (req: Request, res: Response) {
            res.send({
                message: 'Server End Point'
            })
        })
    }
    addRouter(router: RouterInterface) {
        this._server.use(router.getPath(), router.getRouter());
    }

    listen(port: any) {
        this._server.listen(port, () => {
            console.log('server running ...');
            console.log(`server listen on port ${port}`);
        })
    }
}