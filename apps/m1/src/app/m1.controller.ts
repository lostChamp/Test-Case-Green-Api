import { Controller, Get } from '@nestjs/common';

import { M1Service } from './m1.service';

@Controller()
export class M1Controller {
  constructor(private readonly appService: M1Service) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
