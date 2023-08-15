import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import {response, Response} from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller(':choice')
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get()
  getHello( 
    @Res() response : Response,
  @Param('choice') choice:string): void {
    response.send(this.appService.getHello(choice));
  }
}


