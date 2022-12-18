import { RoomModel, UserModel } from '../models/roomModel';
import { IRoomDocument } from '../types';

export class RoomsDB {
    public static async create(): Promise<IRoomDocument> {
        const room = await RoomModel.create({});
        return room;
    }

    public static async joinUser(
        id: string,
        userName: string
    ): Promise<IRoomDocument> {
        const room = await RoomModel.findById(id);
        const joinedUser = await UserModel.create({ name: userName });

        const updateResponse = await RoomModel.findByIdAndUpdate(id, {
            users: [...room.users, joinedUser],
        });
        console.log('🛍️', { joinedUser, updateResponse });

        return {} as IRoomDocument;
    }

    public static async get(id: string): Promise<IRoomDocument> {
        const room = await RoomModel.findById(id);
        return room;
    }

    public static async userChangeEstimate(
        id: string,
        userId: string,
        userEstimate: number
    ): Promise<IRoomDocument> {
        return {} as IRoomDocument;
    }
}
