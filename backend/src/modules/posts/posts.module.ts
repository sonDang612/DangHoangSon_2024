import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsServices } from './posts.service';

@Module({
  providers: [PostsServices],
  exports: [PostsServices],
  controllers: [PostsController],
})
export class PostsModule {}
