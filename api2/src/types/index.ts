import { Document, Model, Types } from 'mongoose';

export interface IRoomAttributes {
    users: Map<string, IUserAttributes>;
}

export interface IRoomCreationAttributes {}

export interface IUserAttributes {
    name: string;
    estimate: number;
}

export interface IRoomDocument
    extends IRoomAttributes,
        Document<Types.ObjectId> {}
export interface IRoomModel extends Model<IRoomAttributes> {}

export interface IUserDocument extends IUserAttributes, Document {}
export interface IUserModel extends Model<IUserDocument> {}
