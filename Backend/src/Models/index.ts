// export class Question{
//     constructor(public id:string, public title:string ,public content:string, public comments:string){}
// }


export interface User{
    
  id:string , 
   name:string , 
    email:string,
      password:string,
       reputation: string
    
}


export interface DecodedData{
  id: string,
  name:string,
  email:string,
  reputation: string,
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
export interface Vote {
  id:string

}
export interface Answer {
  id: number;
  userId: string;
  content: string;
  questionId: number;
  date: Date;
}