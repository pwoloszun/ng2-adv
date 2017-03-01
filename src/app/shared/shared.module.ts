import { NgModule } from '@angular/core';

import { DataTableModule } from "./data-table/data-table.module";

@NgModule({
  imports: [
    DataTableModule,
  ],
  exports: [
    DataTableModule,
  ]
})
export class SharedModule {
}
