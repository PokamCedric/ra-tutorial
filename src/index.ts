import express from "express";
import { connectToDatabase } from "./services/database.service";
import { booksRouter } from "./routes/books.router";

const app = express();
const port = 8080; // default port to listen

connectToDatabase()
    .then(() => {
        // send all calls to /books to our booksRouter
        app.use("/books", booksRouter);

        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
