import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { globalEntities } from 'src/utils/global-entities';
import { DataService } from 'src/modules/data/data.service';
import { DataController } from 'src/modules/data/data.controller';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [DataService],
  exports: [DataService],
  controllers: [DataController],
})
export class DataModule {}
