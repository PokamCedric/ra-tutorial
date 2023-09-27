import express from "express";
import { connectToDatabase } from "./services/database.service";
import { postsRouter,  usersRouter } from "./routes/routers";
import { fetchPosts } from "./api";

const app = express();
const port = process.env.PORT; // default port to listen
const apiUrl = process.env.API_URL; // default port to listen

connectToDatabase()
    .then(() => {
        // send all calls to /users to our postsRouter
        app.use("/posts", postsRouter);

        // send all calls to /users to our usersRouter
        app.use("/users", usersRouter);

        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at ${apiUrl}`);
            fetchPosts();

        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
