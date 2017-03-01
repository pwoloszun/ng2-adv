import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import { map, filter } from 'lodash';

const data = [
  {_id: '100', name: "Batman", age: 33},
  {_id: '101', name: "Spider-Man", age: 24},
  {_id: '102', name: "Superman", age: 25}
];

const DB = new PouchDB('ng2-adv');
DB.bulkDocs(data).catch((error) => {
  console.log("error on bulk insert", error);
});

@Injectable()
export class DbService {

  searchByName(query: string): Promise<any[]> {
    const re = new RegExp(query, "gi");
    return DB.query({
      map: (doc, emit) => {
        const name = doc.name || "";
        if (name.match(re)) {
          emit(doc);
        }
      },
      include_docs: true
    }).then((res) => {
      return map(res.rows, 'key');
    }).catch((err) => {
      console.error("DB query error", err);
      throw err;
    });
  }

}
