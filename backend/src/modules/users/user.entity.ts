import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { PostType } from '../posts/post';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  website: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: PostType[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
}
