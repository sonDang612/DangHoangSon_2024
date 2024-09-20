import { Controller, Get } from '@nestjs/common';
import { DataService } from 'src/modules/data/data.service';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get('import')
  importMockData() {
    return this.dataService.importMockData();
  }
}
