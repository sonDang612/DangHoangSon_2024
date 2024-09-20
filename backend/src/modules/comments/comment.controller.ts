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
import { CommentsServices } from './comments.service';
import { Comment } from './comment';
import { CreateCommentForm } from './dtos/create-comment.form';

@Controller('comments')
export class CommentsController {
  constructor(private commentService: CommentsServices) {}

  @Post()
  create(@Body() createPostDto: CreateCommentForm) {
    let comment: Comment;
    return this.commentService.create(comment);
  }

  @Get()
  findAll() {
    return this.commentService.getAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.get(id);
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.delete(id);
  }

  @Put()
  update(@Param('id', ParseIntPipe) id: number) {
    let post: Comment;
    return this.commentService.update(id, post);
  }
}
