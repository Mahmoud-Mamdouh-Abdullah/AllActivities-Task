import dotenv from 'dotenv';
import { Server } from './Core/Server';
import { APIRouter } from './Routers/APIRouter';

/**
 * dotenv configuration
 */
dotenv.config();


const server = new Server();


/**
 * add api router
 */
server.addRouter(new APIRouter())


/**
 * listen to the server on port 3001
 */
server.listen(process.env.PORT || 3001);