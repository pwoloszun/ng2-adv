import { NgModule } from '@angular/core';

import { MainMenuModule } from "./main-menu/main-menu.module";
import { StatusBarComponent } from "./status-bar/status-bar.component";

@NgModule({
  imports: [
    MainMenuModule
  ],
  declarations: [
    StatusBarComponent
  ],
  exports: [
    MainMenuModule,
    StatusBarComponent
  ]
})
export class LayoutModule {
}
