// export class Question{
//     constructor(public id:string, public title:string ,public content:string, public comments:string){}
// }


export class User{
    constructor(public id:string, public name:string , public email:string, public password:string, public role:string){}
}


export interface DecodedData{
  id: string,
  name:string,
  email:string,
  role: string,
  iat: number
  exp: number
}
export interface Question{

  id: string;
  title: string;
  content: string;
  author: User;
  tags: Tag[];
  upvotes: number;
  downvotes: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  answers: Answer[];
  comments: Comment[];
}
export interface Tag {
  id: number;
  name: string;
}
export interface Answer {
  id: number;
  userId: number;
  username: string;
  content: string;
  date: Date;
  upvotes: number;
  downvotes: number;
}