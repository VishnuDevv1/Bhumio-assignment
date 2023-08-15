import { Injectable } from '@nestjs/common';
import {blogData} from '../blogData';

@Injectable()
export class SearchService {
  search(query : string): any[] {


        
    let searchResults = [];

    for (const animal in blogData) {
        if (
          animal.toLowerCase().includes(query.toLowerCase()) ||
          blogData[animal].toLowerCase().includes(query.toLowerCase())
        ) {
          const content = blogData[animal];
          const result = `${animal.toUpperCase()} : ${content.slice(content.indexOf(query), content.indexOf(query)+50)}`
          searchResults.push(result);
      }
    }

    return searchResults;
    
  }
}