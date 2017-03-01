import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Book } from "./shared/book";
import { BookApiService } from "./shared/book-api.service";

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book$: Observable<Book>;
  isLoading$: Observable<boolean>;

  constructor(private bookApiService: BookApiService) {
  }

  load() { // TODO
    let id: number = 100;
  }

  ngOnInit(): void {
  }

  oldLoad() {
    let id: number = 100;
    this.book$ = this.bookApiService.findBook(id);
  }
}
