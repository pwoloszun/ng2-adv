import * as faker from 'faker';

import { Post } from "./posts/post";
import { Comment } from "./comments/comment";

let nextPostId = 100;
const derivePostId = () => {
  return ++nextPostId;
};

let nextCommentId = 2000;
const deriveCommentId = () => {
  return ++nextCommentId;
};

export const generateComments = (postId: number, count: number): Comment[] => {
  let comments: Comment[] = [];
  for (let i = 0; i < count; i++) {
    let comment: Comment = {
      id: deriveCommentId(),
      postId,
      author: faker.name.findName(),
      text: faker.random.words()
    };
    comments.push(comment);
  }
  return comments;
};

export const generatePosts = (count: number): Post[] => {
  let posts: Post[] = [];
  for (let i = 0; i < count; i++) {
    let topic: Post = {
      id: 100 + i,
      title: faker.random.words(),
      content: faker.lorem.paragraph()
    };
    posts.push(topic);
  }
  return posts;
};

export const randomBetween = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
};
