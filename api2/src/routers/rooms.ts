import express from 'express';
import roomControllers from '../controllers/rooms';

let roomsRouter = express.Router();

roomsRouter.post('/', roomControllers.createRoom);
roomsRouter.post('/:roomId', roomControllers.userJoinRoom);
roomsRouter.get('/:roomId', roomControllers.getRoom);
roomsRouter.put('/:roomId', roomControllers.userChangeEstimate);

export default roomsRouter;
