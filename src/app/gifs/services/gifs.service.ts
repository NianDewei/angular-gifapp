import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'zOBibV9WHuqme4SXVSkd5Y0L5RJvKfP2';
  private _record: string[] = [];
  // TODO change for type
  public results: Gifs[] = [];

  // getter
  get record() {
    return [...this._record];
  }
  constructor(private http: HttpClient) {
    // TODO init of localStorage
    this._record = JSON.parse(localStorage.getItem('records')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  // methods
  addRecord(query: string): void {
    query = query.trim().toLocaleLowerCase();

    // query unique in record
    if (!this._record.includes(query)) {
      //  addRecord
      this._record.unshift(query);

      // Show top 10
      this._record = this._record.splice(0, 9);

      // TODO save in localStorage
      localStorage.setItem('records', JSON.stringify(this._record));
    }

    // this.searchRequest(query);
    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10&offset=0&rating=g&lang=es`
      )
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(resp.data));
      });
  }

  private searchRequest(query: string) {
    // request
    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10&offset=0&rating=g&lang=es`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.results = resp.data;
      });
  }
}
