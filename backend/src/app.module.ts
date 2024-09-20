import { Module } from '@nestjs/common';
import { CommentsModule } from './modules/comments/comments.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { globalModules } from './utils/global-modules';

@Module({
  imports: [...globalModules, UsersModule, PostsModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
