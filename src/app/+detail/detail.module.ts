import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    DetailComponent,
    //TODO: InfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DetailModule {
  public static routes = routes;
}
