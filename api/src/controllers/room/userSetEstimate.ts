import { RequestHandler } from 'express';

import { RoomDB } from '../../db/room';
import { safeController } from '../../helpers/safeController';
import { IUserDocument } from '../../types';

type UserSetEstimateHandler = RequestHandler<
    { roomId: string; userId: string },
    IUserDocument,
    { estimate: string }
>;
export const userSetEstimate: UserSetEstimateHandler = async (req, res) => {
    safeController(async () => {
        const user = await RoomDB.updateUser(req.params.userId, {
            estimate: req.body.estimate,
        });
        if (!user) res.sendStatus(404);
        else res.json(user);
    }, res);
};
