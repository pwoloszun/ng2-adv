import { Component, Input, OnInit } from '@angular/core';

import { Post } from "../shared/posts/post";

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {

  @Input()
  posts: Post[];

  ngOnInit(): void {
  }

}
