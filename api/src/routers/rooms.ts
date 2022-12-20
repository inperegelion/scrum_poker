import express from 'express';
import roomControllers from '../controllers/rooms';

let roomsRouter = express.Router();

roomsRouter.post('/', roomControllers.createRoom);
roomsRouter.get('/:roomId', roomControllers.getRoom);
roomsRouter.post('/:roomId/user/join', roomControllers.userJoinRoom);
roomsRouter.put('/:roomId/user/:userId/', roomControllers.userChangeEstimate);

export default roomsRouter;
