import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

export interface WikipediaResponse {
  query: {
    search: Post[];
  };
}
export interface Post {
  title: string;
  wordcount: number;
  snippet: string;
  pageid: number;
}
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public onSearch(search: string): Observable<Post[]> {
    return (
      this.http
        .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            format: 'json',
            list: 'search',
            utf8: '1',
            srsearch: search,
            origin: '*',
          },
        })
        // .pipe(map((result: WikipediaResponse) => result.query.search));
        .pipe(pluck('query', 'search'))
    );
  }
}
