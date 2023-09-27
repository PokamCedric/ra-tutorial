import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import {Post} from "../interfaces/post.interface";
import {User} from "../interfaces/user.interface";

const collections: { users?: mongoDB.Collection<User>, posts?: mongoDB.Collection<Post> } = {};

export  const getCollectionPosts = () : mongoDB.Collection<Post> => { return collections.posts } 
export  const getCollectionUsers = () : mongoDB.Collection<User> => { return collections.users } 

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
    await applyPostSchemaValidation(db);
    await applyUserSchemaValidation(db);

    // Connect to the collection with the specific name from .env, found in the database previously specified
    const getCollectionPostsion = db.collection<Post>(process.env.POSTS_COLLECTION_NAME);

    // Persist the connection to the Users collection
    collections.posts = getCollectionPostsion;

    // Connect to the collection with the specific name from .env, found in the database previously specified
    const getCollectionUsersion = db.collection<User>(process.env.USERS_COLLECTION_NAME);

    // Persist the connection to the Users collection
    collections.users = getCollectionUsersion;

    console.log(
        `Successfully connected to database: ${db.databaseName}, collection: ${getCollectionPostsion.collectionName} and collection: ${getCollectionUsersion.collectionName}`,
    );
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our User model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applyPostSchemaValidation(db: mongoDB.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "body", "publishedAt"],
            additionalProperties: false,
            properties: {
                _id: {},
                title: {
                    bsonType: "string",
                    description: "'title' is required and is a string",
                },
                body: {
                    bsonType: "string",
                    description: "'body' is required and is a string",
                },
                pusblishedAt: {
                    bsonType: "string",
                    description: "'publishedAt' is required and is a string",
                }
            },
        },
    };

    // Try applying the modification to the collection, if the collection doesn't exist, create it 
   await db.command({
        collMod: process.env.POSTS_COLLECTION_NAME,
        validator: jsonSchema
    }).catch(async (error: mongoDB.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection(process.env.POSTS_COLLECTION_NAME, {validator: jsonSchema});
        }
    });
}

async function applyUserSchemaValidation(db: mongoDB.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "username", "email", "website"],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                username: {
                    bsonType: "string",
                    description: "'username' is required and is a string",
                },
                email: {
                    bsonType: "string",
                    description: "'email' is required and is a string",
                },
                website: {
                    bsonType: "string",
                    description: "'website' is required and is a string",
                }
            },
        },
    };

    // Try applying the modification to the collection, if the collection doesn't exist, create it 
   await db.command({
        collMod: process.env.USERS_COLLECTION_NAME,
        validator: jsonSchema
    }).catch(async (error: mongoDB.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection(process.env.USERS_COLLECTION_NAME, {validator: jsonSchema});
        }
    });
}
