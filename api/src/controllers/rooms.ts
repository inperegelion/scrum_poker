import { RequestHandler } from 'express';

import { RoomsDB } from '../db/rooms';
import {
    IRoomAttributes,
    IRoomCreationAttributes,
    IUserDocument,
    IError,
} from '../types';

async function safeController(func: () => Promise<void> | void, res: any) {
    try {
        func();
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
}

type GetRoomHandler = RequestHandler<
    { roomId: string },
    IRoomAttributes | IError
>;
const getRoom: GetRoomHandler = async (req, res) => {
    safeController(async () => {
        const room = await RoomsDB.get(req.params.roomId);
        if (!room) res.sendStatus(404);
        else res.json(room);
    }, res);
};

type CreateRoomHandler = RequestHandler<
    {},
    IRoomAttributes,
    IRoomCreationAttributes
>;
const createRoom: CreateRoomHandler = async (req, res) => {
    safeController(async () => {
        const room = await RoomsDB.create();
        if (!room) res.sendStatus(404);
        else res.json(room);
    }, res);
};

type userJoinRoomHandler = RequestHandler<
    { roomId: string },
    { createdUser: IUserDocument },
    { userName: string }
>;
const userJoinRoom: userJoinRoomHandler = async (req, res) => {
    safeController(async () => {
        const room = await RoomsDB.joinUser(
            req.params.roomId,
            req.body.userName
        );
        if (!room) res.sendStatus(404);
        else res.json(room);
    }, res);
};

type UserChangeEstimateHandler = RequestHandler<
    { roomId: string; userId: string },
    IUserDocument,
    null,
    { estimate: number }
>;
const userChangeEstimate: UserChangeEstimateHandler = async (req, res) => {
    safeController(async () => {
        const user = await RoomsDB.userChangeEstimate(
            req.params.userId,
            req.query.estimate
        );
        if (!user) res.sendStatus(404);
        else res.json(user);
    }, res);
};
type FindUserHandler = RequestHandler<
    null,
    IUserDocument,
    null,
    { name: string; id: string }
>;
const findUser: FindUserHandler = async (req, res) => {
    safeController(async () => {
        const user = await RoomsDB.findUser(req.query.id, req.query.name);
        if (!user) res.sendStatus(404);
        else res.json(user);
    }, res);
};

const roomControllers = {
    getRoom,
    createRoom,
    userJoinRoom,
    userChangeEstimate,
    findUser,
};
export default roomControllers;
