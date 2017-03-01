import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { Comment } from "./comment";
import { ALL_COMMENTS } from "../in-memory-db";

@Injectable()
export class CommentsApiService {

  fetchCommentsBy(postId: number): Observable<Comment[]> {
    let postComments: Comment[] = ALL_COMMENTS.filter(c => c.postId === postId);
    let comments$ = Observable.of(postComments);
    let delayedComments$ = Observable.timer(1200)
      .switchMapTo(comments$);
    return delayedComments$;
  }

}
