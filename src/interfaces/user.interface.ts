import { ObjectId } from "mongodb";


export interface User {
    name: string;
    username: string;
    email: string;
    website: string;
    id?: ObjectId;
}
