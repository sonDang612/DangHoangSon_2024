import { Injectable, NotFoundException } from '@nestjs/common';
import { PostType } from 'src/modules/posts/post';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/user.entity';
import { UserType } from 'src/modules/users/user';
import { CreatePostForm } from 'src/modules/posts/dtos/create-post.form';
import { UpdatePostForm } from 'src/modules/posts/dtos/update-post.form';
import { Comment } from 'src/modules/comments/comment.entity';
import { CommentType } from 'src/modules/comments/comment';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<PostType>,
    @InjectRepository(User) private userRepository: Repository<UserType>,
    @InjectRepository(Comment)
    private commentRepository: Repository<CommentType>,
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

  async findCommentsByPost(postId: number) {
    const comments = await this.commentRepository.find({
      where: { post: { id: postId } },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });

    if (!comments || comments.length === 0) {
      throw new NotFoundException(
        `No comments found for post with id ${postId}`,
      );
    }

    return comments;
  }

  async getAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [results, total] = await Promise.all([
      this.postRepository.find({
        skip: skip,
        take: limit,
        order: { createdAt: 'DESC' },
      }),
      this.postRepository.count(),
    ]);

    return {
      data: results,
      total: total,
      page: page,
      lastPage: Math.ceil(total / limit),
    };
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
