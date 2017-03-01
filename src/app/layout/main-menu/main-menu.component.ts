import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  @Input() links: Object[];

  title: string = "ng2 workshop";
}
