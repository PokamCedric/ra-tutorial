import express from "express";
import { connectToDatabase } from "./services/database.service";
import { postsRouter,  usersRouter } from "./routes/routers";
import PostSevice from "./services/post.services";

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

            testAPI();

        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });


    const retrieveTutorials = () => {
        PostSevice.getAll()
          .then((response: any) => {
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

      const getTutorial = (id: string) => {
        PostSevice.get(id)
          .then((response: any) => {
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
      
    async function testAPI(){
        retrieveTutorials();
        getTutorial("65146ec7d0b40ba181df2ebd");

        console.log("other tests on: very-good-react-typescript-api-call")
        console.log("https://github.com/bezkoder/react-typescript-api-call/tree/master/src/components")

        // const posts = await fetchAll("posts");
        // console.log(posts);
        // const post = await findOne("posts", {id: "65146ec7d0b40ba181df2ebd"});
        // console.log(post);

        // const blog = { 
        //     title: 'Good Another One',
        //     body: "Keep Going Learning API",
        //     publishedAt: "2023-09-27"
        //  };

         // insertOne("posts", {data: blog});
    }