export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  created_at: number;
  page: number;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  createdAt?: string;
};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
};

export type AddCommentForm = {
  postId?: number;
  userId?: number;
  name: string;
  email: string;
  body: string;
  createdAt?: string;
};

export type Color =
  | "magenta"
  | "red"
  | "volcano"
  | "orange"
  | "gold"
  | "lime"
  | "green"
  | "cyan"
  | "blue"
  | "geekblue"
  | "purple";
