import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'author',
  template: `<h2>Welcome</h2>
  <ul>
  <li *ngFor ="let author of authors">{{author}}</li>
  </ul>
  `,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = "Author";
authors;

  constructor(service: AuthorService ) { 
    this.authors =  service.getAuthors();
  }

  ngOnInit() {
  }

}
