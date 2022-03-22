import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../_services/wikipedia.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() posts: Post[] = [];

  constructor() {}

  ngOnInit(): void {}
}
