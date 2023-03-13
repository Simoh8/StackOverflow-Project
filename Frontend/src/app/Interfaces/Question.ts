export interface Question {
    title: string;
    body: string;
    tags: string[];
    user: {
      name: string;
      avatar: string;
    }}