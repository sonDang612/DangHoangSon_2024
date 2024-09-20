import { Module } from '@nestjs/common';
import { CommentsController } from './comment.controller';
import { CommentsServices } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { globalEntities } from 'src/utils/globalEntities';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [CommentsServices],
  exports: [CommentsServices],
  controllers: [CommentsController],
})
export class CommentsModule {}
