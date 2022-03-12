import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public onSearch(search: string) {
    return this.http.get('');
  }
}
