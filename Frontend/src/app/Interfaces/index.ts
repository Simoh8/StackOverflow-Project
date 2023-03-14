export  interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    reputation: number;
    avatarUrl: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
    questions: Question[];
    answers: Answer[];
    comments: Comment[];
    notifications: Notification[];
    
    register(): void;
    login(): void;
    updateProfile(): void;
    deleteAccount(): void;
  }

  export interface Question {
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
  
    ask(): void;
    view(questionId: string): void;
    search(query: string): void;
    answer(questionId: string, answerContent: string): void;
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
    name:string
}
export interface Message{
    message:string
}

export interface LoginUser{
    Email:string
    Password:string
}