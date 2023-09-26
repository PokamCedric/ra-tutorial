import { ObjectId } from "mongodb";


export interface Post {
    title: string;
    body: string;
    publishedAt: string;
    id?: ObjectId;
}
