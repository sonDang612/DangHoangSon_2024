export type Post = {
  id: number;
  owner: number;
  title: string;
  content: string;
  created_at: number;
  tags: string[];
};

export type Comment = {
  id: number;
  owner: number;
  post: number;
  content: string;
  created_at: number;
};

export type User = {
  id: number;
  username: string;
  password: string;
  name: string;
  dob: string;
  created_at: number;
};
