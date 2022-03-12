import { Component } from '@angular/core';
import { WikipediaService } from './_services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: [] = [];
  title = 'WikiPediaSearch';

  constructor(private wikipediaService: WikipediaService) {}

  onGetTermSearch(value: string) {
    this.wikipediaService.onSearch(value).subscribe((response: any) => {
      this.posts = response;
    });
  }
}
