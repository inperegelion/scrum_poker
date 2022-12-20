import { RoomModel, UserModel } from '../models/roomModel';
import { IRoomDocument, IUserDocument } from '../types';

export class RoomsDB {
    public static async create(): Promise<IRoomDocument> {
        const room = await RoomModel.create({});
        return room;
    }

    public static async joinUser(
        id: string,
        userName: string
    ): Promise<{ createdUser: IUserDocument }> {
        const room = await RoomModel.findById(id);
        const joinedUser = await UserModel.create({ name: userName });

        const updateResponse = await RoomModel.findByIdAndUpdate(id, {
            users: [...room.users, joinedUser],
        });
        if (updateResponse) return { createdUser: joinedUser };
        return null;
    }

    public static async get(id: string): Promise<IRoomDocument> {
        const room = await RoomModel.findById(id);
        const populatedRooms = await room.populate('users');
        return populatedRooms;
    }

    public static async userChangeEstimate(
        userId: string,
        userEstimate: number
    ): Promise<IUserDocument> {
        const user = await UserModel.findByIdAndUpdate(
            userId,
            { estimate: userEstimate },
            { new: true }
        );
        return user;
    }
}
