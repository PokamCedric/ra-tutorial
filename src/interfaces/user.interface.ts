import { ObjectId } from "mongodb";


export default interface IUser {
    name: string;
    username: string;
    email: string;
    website: string;
    id?: ObjectId;
}
