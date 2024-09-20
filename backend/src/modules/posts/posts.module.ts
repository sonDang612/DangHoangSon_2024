import { Module } from '@nestjs/common';
import { PostsController } from 'src/modules/posts/posts.controller';
import { PostsService } from 'src/modules/posts/posts.service';
import { globalEntities } from 'src/utils/global-entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [PostsService],
  exports: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
