import { User } from 'src/modules/users/user.entity';

export type UserType = Omit<User, 'hashPassword'>;
