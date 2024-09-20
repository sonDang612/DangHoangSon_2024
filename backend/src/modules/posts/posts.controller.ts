import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsServices } from './posts.service';
import { PostType } from './post';
import { CreatePostForm } from './dtos/create-post.form';
import { UpdatePostForm } from './dtos/update-post.form';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsServices) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createPostDto: CreatePostForm) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.getAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostForm: UpdatePostForm,
  ) {
    return this.postsService.update(id, updatePostForm);
  }
}
