import { Module } from '@nestjs/common';
import { CommentsController } from './comment.controller';
import { CommentsServices } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { globalEntities } from 'src/utils/global-entities';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [CommentsServices],
  exports: [CommentsServices],
  controllers: [CommentsController],
})
export class CommentsModule {}
