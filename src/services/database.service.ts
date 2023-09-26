import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import {Book} from "../interfaces/book.interface";

export const collections: { books?: mongoDB.Collection<Book> } = {};

export async function connectToDatabase() {
    // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
    dotenv.config();

    // Create a new MongoDB client with the connection string from .env
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    // Connect to the cluster
    await client.connect();

    // Connect to the database with the name specified in .env
    const db = client.db(process.env.DB_NAME);
    
    // Apply schema validation to the collection
    await applySchemaValidation(db);

    // Connect to the collection with the specific name from .env, found in the database previously specified
    const booksCollection = db.collection<Book>(process.env.BOOKS_COLLECTION_NAME);

    // Persist the connection to the Books collection
    collections.books = booksCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${booksCollection.collectionName}`,
    );
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Book model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongoDB.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "author", "pages", "rating", "reviews"],
            additionalProperties: false,
            properties: {
                _id: {},
                title: {
                    bsonType: "string",
                    description: "'title' is required and is a string",
                },
                author: {
                    bsonType: "string",
                    description: "'author' is required and is a string",
                },
                pages: {
                    bsonType: "number",
                    description: "'price' is required and is a number",
                },
                rating: {
                    bsonType: "number",
                    description: "'rating' is required and is a number",
                },
                reviews : {
                    bsonType : "array",
                    description: "'reviews' is required and are is an Array",
                }
            
            },
        },
    };

    // Try applying the modification to the collection, if the collection doesn't exist, create it 
   await db.command({
        collMod: process.env.BOOKS_COLLECTION_NAME,
        validator: jsonSchema
    }).catch(async (error: mongoDB.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection(process.env.BOOKS_COLLECTION_NAME, {validator: jsonSchema});
        }
    });
}
