import { Module } from '@nestjs/common';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
import { PostsModule } from './modules/posts/posts.module';
import { PostsController } from './modules/posts/posts.controller';
import { PostsServices } from './modules/posts/posts.service';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [UsersController, PostsController],
  providers: [UsersService, PostsServices],
})
export class AppModule {}
