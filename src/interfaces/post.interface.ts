import { ObjectId } from "mongodb";


export default interface IPost {
    title: string;
    body: string;
    publishedAt: string;
    id?: ObjectId;
}
