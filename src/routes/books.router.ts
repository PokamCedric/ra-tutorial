import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const booksRouter = express.Router();
const docName = "book";
const DocName = "Book";

booksRouter.use(express.json());

booksRouter.get("/", async (_req: Request, res: Response) => {
    try {
        // Call find with an empty filter object, meaning it returns all documents in the collection. Saves as Book array to take advantage of types
        const books = await collections.books.find({}).toArray();

        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Example route: http://localhost:8080/books/610aaf458025d42e7ca9fcd0
booksRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        // _id in MongoDB is an objectID type so we need to find our specific document by querying
        const query = { _id: new ObjectId(id) };
        const book = await collections.books.findOne(query);

        if (book) {
            res.status(200).send(book);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

booksRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newBook = req.body;
        const result = await collections.books.insertOne(newBook);

        result
            ? res.status(201).send(`Successfully created a new ${docName} with id ${result.insertedId}`)
            : res.status(500).send(`Failed to create a new ${docName}.`);
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

booksRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    if (ObjectId.isValid(id)) {
        try {
            const updatedBook = req.body;
            const query = { _id: new ObjectId(id) };
            // $set adds or updates all fields
            const result = await collections.books.updateOne(query, { $set: updatedBook });

            result
                ? res.status(200).send(`Successfully updated ${docName} with id ${id}`)
                : res.status(304).send(`${DocName} with id: ${id} not updated`);
        } catch (error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    } else {
        res.status(404).send(`${DocName} with id ${id} does not exist`);
    } 
});

booksRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    if (ObjectId.isValid(id)) {
        try {
            const query = { _id: new ObjectId(id) };
            const result = await collections.books.deleteOne(query);

            if (result && result.deletedCount) {
                res.status(202).send(`Successfully removed ${docName} with id ${id}`);
            } else if (!result) {
                res.status(400).send(`Failed to remove ${docName} with id ${id}`);
            } else if (!result.deletedCount) {
                res.status(404).send(`${DocName} with id ${id} does not exist`);
            }
        } catch (error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    } else {
        res.status(404).send(`${DocName} with id ${id} does not exist`);
  }
});
