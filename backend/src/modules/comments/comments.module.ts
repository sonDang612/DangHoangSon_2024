import { Module } from '@nestjs/common';
import { CommentsController } from 'src/modules/comments/comment.controller';
import { CommentsService } from 'src/modules/comments/comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { globalEntities } from 'src/utils/global-entities';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [CommentsService],
  exports: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
