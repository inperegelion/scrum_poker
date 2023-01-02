import { RequestHandler } from 'express';

import { RoomDB } from '../../db/room';
import { safeController } from '../../helpers/safeController';
import { IRoomAttributes } from '../../types';

type DeleteRoomHandler = RequestHandler<{ roomId: string }, IRoomAttributes>;
export const deleteRoom: DeleteRoomHandler = async (req, res) => {
    safeController(async () => {
        const room = await RoomDB.delete(req.params.roomId);
        res.status(204).json(room);
    }, res);
};
