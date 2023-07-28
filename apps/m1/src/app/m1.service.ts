import { Injectable } from '@nestjs/common';
import {HelloM1Contract} from "@case/contracts";

@Injectable()
export class M1Service {
  async helloName(name: HelloM1Contract.Request) {
    return `Hello ${name.name}!!!`;
  }
}
