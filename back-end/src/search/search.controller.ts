import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import {blogData} from '../blogData';
import { SearchService } from './search.service';
import {response, Response} from 'express';
import { Param, Res } from '@nestjs/common/decorators';

@Controller('/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Get('/:q')
  search(
    @Param('q') query: string, @Res() response) {
      
    const searchResults = this.searchService.search(query);
    response.status(200).json(searchResults);
  }
}


