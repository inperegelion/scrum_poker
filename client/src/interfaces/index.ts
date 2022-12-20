import { IRoomDocument, IUserDocument } from "../../../api/src/types";

export interface IRoom extends Omit<IRoomDocument, "_id" | "users"> {
  _id: string;
  users: IUser[];
}
export interface IUser extends Omit<IUserDocument, "_id"> {
  _id: string;
}

export interface ICreateUserResponse {
  createdUser: IUser;
}
