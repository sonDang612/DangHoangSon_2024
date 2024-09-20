import { Module } from '@nestjs/common';
import { CommentsModule } from 'src/modules/comments/comments.module';
import { PostsModule } from 'src/modules/posts/posts.module';
import { UsersModule } from 'src/modules/users/users.module';
import { globalModules } from 'src/utils/global-modules';
import { DataModule } from 'src/modules/data/data.module';

@Module({
  imports: [
    ...globalModules,
    UsersModule,
    PostsModule,
    CommentsModule,
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
