import { User } from 'src/modules/users/user.entity';
import { Post } from 'src/modules/posts/post.entity';

export type PostType = Omit<Post, 'user'> & {
  user: Omit<User, 'hashPassword'>;
};
