import { User } from "./User";

interface Answer {
    id: number;
    body: string;
    author: User;
    createdDate: Date;
    editedDate?: Date;
    upvotes: number;
    downvotes: number;
    comments: Comment[];
    accepted: boolean;
  }
  