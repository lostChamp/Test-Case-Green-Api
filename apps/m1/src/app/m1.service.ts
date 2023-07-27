import { Injectable } from '@nestjs/common';

@Injectable()
export class M1Service {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
