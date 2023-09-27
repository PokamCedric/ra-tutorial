import express from "express";
import { connectToDatabase } from "./services/database.service";
import { postsRouter,  usersRouter } from "./routes/routers";

const app = express();
const port = 8082; // default port to listen

connectToDatabase()
    .then(() => {
        // send all calls to /users to our postsRouter
        app.use("/posts", postsRouter);

        // send all calls to /users to our usersRouter
        app.use("/users", usersRouter);

        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
