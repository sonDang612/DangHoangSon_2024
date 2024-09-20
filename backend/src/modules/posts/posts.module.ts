import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsServices } from './posts.service';
import { globalEntities } from 'src/utils/global-entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [PostsServices],
  exports: [PostsServices],
  controllers: [PostsController],
})
export class PostsModule {}
