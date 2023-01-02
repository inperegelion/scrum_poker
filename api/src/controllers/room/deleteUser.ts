import { RequestHandler } from 'express';

import { RoomDB } from '../../db/room';
import { safeController } from '../../helpers/safeController';
import { IUserDocument } from '../../types';

type DeleteUserHandler = RequestHandler<{ userId: string }, IUserDocument>;
export const deleteUser: DeleteUserHandler = async (req, res) => {
    safeController(async () => {
        const user = await RoomDB.deleteUser(req.params.userId);
        if (!user) res.sendStatus(404);
        else res.sendStatus(204);
    }, res);
};
