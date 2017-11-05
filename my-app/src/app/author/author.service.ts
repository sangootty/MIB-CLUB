import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  getAuthors(){
    return ["author 2","author 1"];
  }

  constructor() { 
}

}
