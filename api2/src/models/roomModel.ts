import { model, Schema, Types } from 'mongoose';
import { IRoomDocument, IUserDocument } from '../types';

const userSchema = new Schema<IUserDocument>({
    name: { type: String, required: true },
    estimate: { type: Number, required: false },
});

const roomSchema = new Schema<IRoomDocument>(
    { users: [{ type: Types.ObjectId, ref: 'User' }] },
    { timestamps: true }
);

export const RoomModel = model<IRoomDocument>('Room', roomSchema);
export const UserModel = model<IUserDocument>('User', userSchema);
