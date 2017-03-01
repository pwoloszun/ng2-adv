import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from "./book";
import { ForumComponent } from "./forum";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail', loadChildren: './+detail#DetailModule'},
  {path: 'book', component: BookComponent},
  {path: 'forum', component: ForumComponent},
];

export const routing = RouterModule.forRoot(routes);
