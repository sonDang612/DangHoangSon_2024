import { Module } from '@nestjs/common';
import { CommentsController } from './modules/comments/comment.controller';
import { CommentsModule } from './modules/comments/comments.module';
import { PostsController } from './modules/posts/posts.controller';
import { PostsModule } from './modules/posts/posts.module';
import { PostsServices } from './modules/posts/posts.service';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule],
  controllers: [UsersController, PostsController, CommentsController],
  providers: [UsersService, PostsServices, CommentsController],
})
export class AppModule {}
