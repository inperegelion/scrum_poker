import { RequestHandler } from 'express';

import { RoomDB } from '../../db/room';
import { safeController } from '../../helpers/safeController';
import { IRoomAttributes } from '../../types';

type CreateRoomHandler = RequestHandler<{}, IRoomAttributes>;
export const createRoom: CreateRoomHandler = async (req, res) => {
    safeController(async () => {
        const room = await RoomDB.create();
        if (!room) res.sendStatus(404);
        else res.json(room);
    }, res);
};
