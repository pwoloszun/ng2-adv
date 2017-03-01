import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url: string = 'http://rocketmind.pl';
  linkText: string = "RocketMind";

  mainMenuLinks: Object[] = [
    {value: '', text: 'Home'},
    {value: 'about', text: 'About'},
    {value: 'detail', text: 'Detail'},
    {value: 'book', text: 'Book'},
    {value: 'forum', text: 'Forum'},
  ];

  constructor() {
  }
}
