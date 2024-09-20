import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostsServices } from './posts.service';
import { PostType } from './post';
import { CreatePostForm } from './dtos/create-post.form';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsServices) {}

  @Post()
  create(@Body() createPostDto: CreatePostForm) {
    let post: PostType;
    return this.postsService.create(post);
  }

  @Get()
  findAll() {
    return this.postsService.getAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.get(id);
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }

  @Put()
  update(@Param('id', ParseIntPipe) id: number) {
    let post: PostType;
    return this.postsService.update(id, post);
  }
}
