import { Module } from '@nestjs/common';
import { CommentsController } from './comment.controller';
import { CommentsServices } from './comments.service';

@Module({
  providers: [CommentsServices],
  exports: [CommentsServices],
  controllers: [CommentsController],
})
export class CommentsModule {}
