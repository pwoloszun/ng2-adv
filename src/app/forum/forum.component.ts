import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "../app.reducer";
import { Post } from "./shared/posts/post";

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
})
export class ForumComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // TODO
  }

}
