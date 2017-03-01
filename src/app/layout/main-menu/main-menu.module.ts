import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MainMenuComponent } from './main-menu.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MainMenuComponent
  ],
  exports: [
    MainMenuComponent
  ]
})
export class MainMenuModule {
}
