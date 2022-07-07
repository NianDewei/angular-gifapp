import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _record: string[] = [];

  // getter
  get record() {
    return [...this._record];
  }
  constructor() {}

  // methods
  addRecord(query: string): void {
    query = query.trim().toLocaleLowerCase();

    // query unique in record
    if (!this._record.includes(query)) {
      //  addRecord
      this._record.unshift(query);
      // Show top 10
      this._record = this._record.splice(0, 9);
    }

    console.log(this._record);
  }
}
