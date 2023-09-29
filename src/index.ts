/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { connect } from 'mongoose';
import { environment } from './environments/environment';
import apiRoutes from './api/routes';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const apiUrl = process.env.API_URL; // default port to listen

connect(environment.DB_URI, {})
.then(() => {
  // send all calls to /users to our postsRouter
  app.use('/api', apiRoutes);

  // start the Express server
  app.listen(process.env.PORT, () => {
      console.log(`Server started at ${apiUrl}`);

    //  testAPI();

  });
})
.catch((error: Error) => {
  console.error("Database connection failed", error);
  process.exit();
});

