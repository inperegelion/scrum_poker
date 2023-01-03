import { RoomModel, UserModel } from '../models/roomModel';
import { IRoomDocument, IUserAttributes, IUserDocument } from '../types';

export class RoomDB {
    public static async create(): Promise<IRoomDocument> {
        const room = await RoomModel.create({});
        return room;
    }

    public static async joinUser(
        id: string,
        userName: string
    ): Promise<IUserDocument> {
        if (!this.verifyIdIsValid(id)) return null;
        // todo: this method makes 3 DB requests. Can we make 2?
        const room = await RoomModel.findById(id);
        const user = await UserModel.create({ name: userName });

        const updateResponse = await RoomModel.findByIdAndUpdate(id, {
            users: [...room.users, user],
        });
        if (updateResponse) return user;
        return null;
    }

    public static async get(id: string): Promise<IRoomDocument> {
        if (!this.verifyIdIsValid(id)) return null;
        const room = await RoomModel.findById(id);
        if (!room) return null;
        const populatedRoom = await room.populate('users');
        return populatedRoom;
    }

    public static async delete(id: string): Promise<IRoomDocument> {
        if (!this.verifyIdIsValid(id)) return null;
        const room = await RoomModel.findByIdAndDelete(id);
        return room;
    }

    public static async updateUser(
        userId: string,
        changes: Partial<IUserAttributes>
    ): Promise<IUserDocument> {
        if (!this.verifyIdIsValid(userId)) return null;
        const user = await UserModel.findByIdAndUpdate(userId, changes, {
            new: true,
        });
        return user;
    }

    public static async deleteUser(userId: string): Promise<IUserDocument> {
        if (!this.verifyIdIsValid(userId)) return null;
        const user = await UserModel.findByIdAndDelete(userId);
        return user;
    }

    public static async getUser(id: string): Promise<IUserDocument> {
        if (!this.verifyIdIsValid(id)) return null;
        const user = await UserModel.findById(id);
        return user;
    }

    static verifyIdIsValid(id: string): boolean {
        return Boolean(id.match(/^[0-9a-fA-F]{24}$/));
    }
}
