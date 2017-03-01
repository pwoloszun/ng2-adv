import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { Post } from "./post";
import { ALL_POSTS } from "../in-memory-db";

@Injectable()
export class PostsApiService {

  fetchAll(): Observable<Post[]> {
    let posts$ = Observable.of(ALL_POSTS);
    let delayedPosts$ = Observable.timer(1200)
      .switchMapTo(posts$);
    return delayedPosts$;
  }

}
