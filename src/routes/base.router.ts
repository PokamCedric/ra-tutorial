import express, { Request, Response, Router } from "express";
import { ObjectId } from "mongodb";

export const router = express.Router();
router.use(express.json());

export default function raExpressMongoDB(
    collection: () => any,
    docName: String,
    DocName: String
  ): Router {
        const router = Router()
      
    router.get("/", async (_req: Request, res: Response) => {

        try {
            // Call find with an empty filter object, meaning it returns all documents in the collection. Saves as Post array to take advantage of types
            const list = await collection().find({}).toArray();
  
            res.status(200).send(list);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    // Example route: http://localhost:8082/posts/610aaf458025d42e7ca9fcd0
    router.get("/:id", async (req: Request, res: Response) => {
        const id = req?.params?.id;

        try {
            // _id in MongoDB is an objectID type so we need to find our specific document by querying
            const query = { _id: new ObjectId(id) };
            const item = await collection().findOne(query);

            if (item) {
                res.status(200).send(item);
            }
        } catch (error) {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
        }
    });

router.post("/", async (req: Request, res: Response) => {
    try {
        const newPost = req.body;
        const result = await collection().insertOne(newPost);

        result
            ? res.status(201).send(`Successfully created a new ${docName} with id ${result.insertedId}`)
            : res.status(500).send(`Failed to create a new ${docName}.`);
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    if (ObjectId.isValid(id)) {
        try {
            const updatedPost = req.body;
            const query = { _id: new ObjectId(id) };
            // $set adds or updates all fields
            const result = await collection().updateOne(query, { $set: updatedPost });

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

router.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    if (ObjectId.isValid(id)) {
        try {
            const query = { _id: new ObjectId(id) };
            const result = await collection().deleteOne(query);

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

    return router;

  }

