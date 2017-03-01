import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Comment } from "../shared/comments/comment";
import { AppState } from "../../app.reducer";

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
})
export class CommentsListComponent implements OnInit {

  @Input()
  postId: number;

  comments$: Observable<Comment[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    //TODO
  }

}
