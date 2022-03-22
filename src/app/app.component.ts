import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post, WikipediaService } from './_services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Post[] = [];
  title = 'WikiPediaSearch';

  constructor(private wikipediaService: WikipediaService) {}

  onGetTermSearch(value: string) {
    this.wikipediaService.onSearch(value).subscribe(
      (response: Post[]) => {
        console.log(response);
        this.posts = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
