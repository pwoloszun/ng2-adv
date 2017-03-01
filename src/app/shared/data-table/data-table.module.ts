import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { DataTableComponent } from "./data-table.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DataTableComponent
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule {
}
