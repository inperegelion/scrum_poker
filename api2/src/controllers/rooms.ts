import { RequestHandler } from 'express';

import { RoomsDB } from '../db/rooms';
import {
    IRoomAttributes,
    IRoomCreationAttributes,
    IUserDocument,
} from '../types';

type GetRoomHandler = RequestHandler<{ roomId: string }, IRoomAttributes>;
const getRoom: GetRoomHandler = async (req, res) => {
    const room = await RoomsDB.get(req.params.roomId);
    if (!room) res.sendStatus(404);
    else res.json(room);
};

type CreateRoomHandler = RequestHandler<
    {},
    IRoomAttributes,
    IRoomCreationAttributes
>;
const createRoom: CreateRoomHandler = async (req, res) => {
    const room = await RoomsDB.create();
    if (!room) res.sendStatus(404);
    else res.json(room);
};

type userJoinRoomHandler = RequestHandler<
    { roomId: string },
    { createdUser: IUserDocument },
    { userName: string }
>;
const userJoinRoom: userJoinRoomHandler = async (req, res) => {
    const room = await RoomsDB.joinUser(req.params.roomId, req.body.userName);
    if (!room) res.sendStatus(404);
    else res.json(room);
};

type UserChangeEstimateHandler = RequestHandler<
    { roomId: string; userId: string },
    IUserDocument,
    null,
    { estimate: number }
>;
const userChangeEstimate: UserChangeEstimateHandler = async (req, res) => {
    const user = await RoomsDB.userChangeEstimate(
        req.params.userId,
        req.query.estimate
    );
    if (!user) res.sendStatus(404);
    else res.json(user);
};

const roomControllers = {
    getRoom,
    createRoom,
    userJoinRoom,
    userChangeEstimate,
};
export default roomControllers;
