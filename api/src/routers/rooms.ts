import express from 'express';
import { roomControllers } from '../controllers';

let roomsRouter = express.Router();

roomsRouter.post('/', roomControllers.createRoom);
roomsRouter.get('/:roomId', roomControllers.getRoom);
roomsRouter.delete('/:roomId', roomControllers.deleteRoom);
roomsRouter.post('/:roomId/user', roomControllers.userJoinRoom);
roomsRouter.delete('/:roomId/user/:userId', roomControllers.deleteUser);
roomsRouter.put('/:roomId/user/:userId', roomControllers.userSetEstimate);
roomsRouter.get('/:roomId/user/:userId', roomControllers.getUser);

export default roomsRouter;
