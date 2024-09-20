import { Injectable, NotFoundException } from '@nestjs/common';
import { PostType } from './post';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { UserType } from '../users/user';
import { CreatePostForm } from './dtos/create-post.form';
import { UpdatePostForm } from './dtos/update-post.form';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<PostType>,
    @InjectRepository(User) private userRepository: Repository<UserType>,
  ) {}
  async create(createPostForm: CreatePostForm) {
    const user = await this.userRepository.findOne({
      where: { id: createPostForm.userId },
    });
    if (!user) {
      throw new NotFoundException(
        `User with ID ${createPostForm.userId} not found`,
      );
    }
    const newPost = this.postRepository.create({
      ...createPostForm,
      user: user,
    });
    return this.postRepository.save(newPost);
  }

  async findById(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  getAll() {
    return this.postRepository.find({ relations: ['user'] });
  }

  async update(id: number, updatePostForm: UpdatePostForm) {
    const post = await this.postRepository.findOne({
      where: { id },
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    Object.assign(post, updatePostForm);

    return this.postRepository.save(post);
  }

  delete(id: number) {
    this.postRepository.delete(id);
    return null;
  }
}
