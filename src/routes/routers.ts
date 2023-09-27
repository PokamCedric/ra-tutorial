import express from "express";
import { getCollectionPosts, getCollectionUsers } from "../services/database.service";
import raExpressMongoDB from "./base.router";

export const postsRouter = express.Router();
export const usersRouter = express.Router();

postsRouter.use(express.json());
usersRouter.use(express.json());

postsRouter.use(
    raExpressMongoDB(getCollectionPosts, "post", "Post")
);

usersRouter.use(
    raExpressMongoDB(getCollectionUsers, "user", "User")
);

