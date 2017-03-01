import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { Book } from "./book";

@Injectable()
export class BookApiService {

  findBook(id: number): Observable<Book> {
    let book: Book = {
      id: 100,
      title: 'war & peace',
      description: 'lorem ipsum...'
    };

    let instantBook$ = Observable.of(book);
    return Observable.timer(1200)
      .switchMapTo(instantBook$);
  }

}
