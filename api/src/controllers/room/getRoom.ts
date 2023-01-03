import { RequestHandler } from 'express';

import { RoomDB } from '../../db/room';
import { safeController } from '../../helpers/safeController';
import { IError, IRoomAttributes } from '../../types';

type GetRoomHandler = RequestHandler<
    { roomId: string },
    IRoomAttributes | IError
>;
export const getRoom: GetRoomHandler = async (req, res) => {
    safeController(async () => {
        const room = await RoomDB.get(req.params.roomId);
        if (!room) res.sendStatus(404);
        else res.json(room);
    }, res);
};
