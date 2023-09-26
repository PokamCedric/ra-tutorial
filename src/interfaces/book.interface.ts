import { ObjectId } from "mongodb";


// test it here: https://www.typescriptlang.org/play?#code
/*

var obj: Book = {
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  pages: 500,
  rating: 9,
    reviews : [
        {name: "peach" , body: "one of my favs"}
  ]
}*/

export interface Review {
    name: string;
    body: string;
}

export interface Book {
    title: string;
    author: string;
    pages: number;
    rating: number;
    reviews: {
        [key: number]: Review
    };
    id?: ObjectId;
}
