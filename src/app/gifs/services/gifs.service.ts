import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'zOBibV9WHuqme4SXVSkd5Y0L5RJvKfP2';
  private _record: string[] = [];

  // getter
  get record() {
    return [...this._record];
  }
  constructor( private http: HttpClient) {}

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

    // request
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=zOBibV9WHuqme4SXVSkd5Y0L5RJvKfP2&q=Dragon+Ball+z&limit=10&offset=0&rating=g&lang=es')
              .subscribe((resp:any)=> console.log(resp.data))
  }
}
