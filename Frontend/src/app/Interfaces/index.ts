
export  interface User {
    username: string;
    email: string;
    avatarUrl: string;
    bio: string;
    createdAt: Date;

 
  }

  export interface Question {
id: any;
    title: string;
    content: string;
    tags: string[];
    createdAt: Date
    author: string;
    

   
   
  }
  export interface addquestion{
    title:string
    tags: string[]
    content: string
    createdAt: Date


  }
  export interface addAnswer {
    id: string;
    userId: string;
    username: string;
    content: string;
    createdAt: Date;
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
  // Interface for tag data
  export interface Tag {
    id: number;
    name: string;
  }

  // Interface for comment data
  export interface Comment {
    id: number;
    text: string;
    userId: number;
    postId: number;
    createdAt: Date;
  }

  export interface SearchResult {
    type: "question" | "answer" | "tag";
    id: number;
    title: string;
    text?: string;
  }
  // Interface for vote data
  export interface Vote {
    userId: number;
    postId: number;
    voteType: "up" | "down";
  }
  export interface LoginSuccess{
    message:string
    token:string
    role:string
    username:string
}
export interface Message{
    message:string
}

export interface LoginUser{
    email:string
    password:string
}