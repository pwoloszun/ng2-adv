import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as faker from 'faker';

import { HackerTopic } from "./hacker-topic";

const PER_PAGE: number = 50;

const generateDataFor = (pageNo: number): HackerTopic[] => {
  let topics: HackerTopic[] = [];
  for (let i = 0; i < PER_PAGE; i++) {
    let topic: HackerTopic = {
      id: 1000 * pageNo + i,
      title: faker.random.words(),
      content: faker.lorem.paragraph()
    };
    topics.push(topic);
  }
  return topics;
};

@Injectable()
export class HackerNewsService {

  fetchNews(pageNo: number): Observable<HackerTopic[]> {
    return Observable.create((observer) => {
      let topics: HackerTopic[] = generateDataFor(pageNo);
      observer.next(topics);
      observer.complete();
    });
  }

}
