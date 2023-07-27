import { Injectable } from '@nestjs/common';

@Injectable()
export class M2Service {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
