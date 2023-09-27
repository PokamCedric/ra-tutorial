import { ObjectId } from "mongodb";


export default interface User {
    name: string;
    username: string;
    email: string;
    website: string;
    id?: ObjectId;
}
