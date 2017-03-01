import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EffectsModule } from '@ngrx/effects';

import { ForumComponent } from './forum.component';
import { PostsListComponent } from "./posts-list/posts-list.component";
import { CommentsListComponent } from "./comments-list/comments-list.component";
import { PostsApiService } from "./shared/posts/posts-api.service";
import { CommentsApiService } from "./shared/comments/comments-api.service";
import { PostsEffects } from "./shared/posts/posts.effects";
import { CommentsEffects } from "./shared/comments/comments.effects";

@NgModule({
  imports: [
    CommonModule,

    //effects
    EffectsModule.run(PostsEffects),
    EffectsModule.run(CommentsEffects),

  ],
  exports: [
    ForumComponent,
  ],
  declarations: [
    ForumComponent,
    PostsListComponent,
    CommentsListComponent,
  ],
  providers: [
    PostsApiService,
    CommentsApiService,
  ],
})
export class ForumModule {
}

export {
  ForumComponent,
}
