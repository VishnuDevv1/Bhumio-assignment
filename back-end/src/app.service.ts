import { Injectable } from '@nestjs/common';
import {blogData} from './blogData';




@Injectable()
export class AppService {
  getHello(choice : string): string {
    return blogData[choice];
  }
}
