import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    console.log(event);
    console.log(this.term);
    event.preventDefault();
  }
}