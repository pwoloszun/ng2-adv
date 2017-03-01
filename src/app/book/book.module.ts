import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EffectsModule } from '@ngrx/effects';

import { BookComponent } from './book.component';
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookApiService } from "./shared/book-api.service";
import { BookEffects } from "./shared/book.effects";

@NgModule({
  imports: [
    CommonModule,
    //effects
    EffectsModule.run(BookEffects), //TODO

  ],
  exports: [BookComponent],
  declarations: [
    BookComponent,
    BookDetailsComponent
  ],
  providers: [
    BookApiService
  ],
})
export class BookModule {
}

export {
  BookComponent,
}
