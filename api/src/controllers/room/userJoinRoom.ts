import { RequestHandler } from 'express';
import { RoomDB } from '../../db/room';
import { safeController } from '../../helpers/safeController';
import { IUserDocument } from '../../types';

type userJoinRoomHandler = RequestHandler<
    { roomId: string },
    IUserDocument,
    { name: string }
>;
export const userJoinRoom: userJoinRoomHandler = async (req, res) => {
    safeController(async () => {
        const room = await RoomDB.joinUser(
            req.params.roomId,
            req.body.name
        );
        if (!room) res.sendStatus(404);
        else res.json(room);
    }, res);
};
