import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { map, each, isArray, isString } from 'lodash';

const tokensRE = /:[a-z]+[0-9]*/gi;

@Component({
  selector: 'data-table',
  templateUrl: "./data-table.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T> {

  @Input() items: T[];
  @Input() selectedItem: T;
  @Input() metaData: Object[];
  @Output() itemClick: EventEmitter<T> = new EventEmitter<T>();

  onRowClick(item: T) {
    this.itemClick.emit(item);
  }

  getLinkFor(item: T, commands: any[] | string = []): any[] | string {
    if (isArray(commands)) {
      return map(commands, (command: any) => {
        if (isString(command)) {
          return this.replaceTokens(item, <string>command);
        } else {
          return command
        }
      });
    } else {
      return this.replaceTokens(item, <string>commands);
    }
  }

  private replaceTokens(item: T, str: string): string {
    let result: string = str;
    let tokens = result.match(tokensRE);
    each(tokens, (token: string) => {
      let value: any = item[token.slice(1)];
      result = result.replace(token, value);
    });
    return result;
  }
}
