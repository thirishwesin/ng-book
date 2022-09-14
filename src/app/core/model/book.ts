export class Book {
  /*
"id": 1,
"title": "Blue Moon",
"author": "T.M Thomas",
"price": 25.4,
"description": "A good to read novel",
"imageUrl": "https://picsum.photos/400",
"comments": [
"Nice",
"Good to read"
],
"publishedDate": "2022-07-16"
  */
  id?:number;
  title?:string;
  author?:string;
  price?:number;
  description?:string;
  imageUrl?:string;
  comments?:string[];
  publishedDate?:Date;

  constructor(title?: string, author?: string, price?: number, description?: string, imageUrl?: string, comments?: string[], publishedDate?: Date,id?: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.comments = comments;
    this.publishedDate = publishedDate;
  }
}
