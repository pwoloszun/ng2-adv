import { generatePosts, generateComments, randomBetween } from "./utils";
import { Post } from "./posts/post";
import { Comment } from "./comments/comment";

let ALL_COMMENTS: Comment[] = [];
let ALL_POSTS: Post[] = generatePosts(10);

ALL_POSTS.forEach((post) => {
  let postId: number = post.id;
  let commentsCount = randomBetween(0, 5);
  let postComments = generateComments(postId, commentsCount);
  ALL_COMMENTS = ALL_COMMENTS.concat(postComments);
});

export {
  ALL_POSTS,
  ALL_COMMENTS
}
