import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(x,y): number {
    return x+y
  }
}
