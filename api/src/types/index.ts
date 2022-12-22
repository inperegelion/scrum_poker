import { Document, Model, Types } from 'mongoose';

export interface IRoomAttributes {
    users: IUserDocument[];
}

export interface IRoomCreationAttributes {}

export interface IUserAttributes {
    name: string;
    estimate: string;
}

export interface IRoomDocument
    extends IRoomAttributes,
        Document<Types.ObjectId> {}
export interface IRoomModel extends Model<IRoomAttributes> {}

export interface IUserDocument
    extends IUserAttributes,
        Document<Types.ObjectId> {}
export interface IUserModel extends Model<IUserDocument> {}

export interface IError {
    message: Error['message'];
}
