import { Controller, Get } from '@nestjs/common';

import { M2Service } from './m2.service';

@Controller()
export class M2Controller {
  constructor(private readonly appService: M2Service) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
