import { Component, Input, OnInit } from '@angular/core';

import { Book } from "../shared/book";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  book: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
