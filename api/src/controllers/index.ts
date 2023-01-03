import { userSetEstimate } from './room/userSetEstimate';
import { userJoinRoom } from './room/userJoinRoom';
import { createRoom } from './room/createRoom';
import { deleteRoom } from './room/deleteRoom';
import { deleteUser } from './room/deleteUser';
import { getUser } from './room/getUser';
import { getRoom } from './room/getRoom';

const roomControllers = {
    createRoom,
    getRoom,
    userJoinRoom,
    userSetEstimate,
    getUser,
    deleteRoom,
    deleteUser,
};

export { roomControllers };
