import { RequestHandler } from 'express';

import { RoomDB } from '../../db/room';
import { safeController } from '../../helpers/safeController';
import { IUserDocument } from '../../types';

type FindUserHandler = RequestHandler<{ userId: string }, IUserDocument>;
export const getUser: FindUserHandler = async (req, res) => {
    safeController(async () => {
        const user = await RoomDB.getUser(req.params.userId);
        if (!user) res.sendStatus(404);
        else res.json(user);
    }, res);
};
