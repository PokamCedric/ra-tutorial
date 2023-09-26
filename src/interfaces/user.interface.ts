import { ObjectId } from "mongodb";


// test it here: https://www.typescriptlang.org/play?#code
/*

var obj: User = {
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  pages: 500,
  rating: 9,
    reviews : [
        {name: "peach" , body: "one of my favs"}
  ]
}*/


export interface User {
    name: string;
    username: string;
    email: string;
    website: string;
    id?: ObjectId;
}
