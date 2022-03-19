import { Component, Input, OnInit } from '@angular/core';

type NewType = any;

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() posts: NewType = [];

  constructor() {}

  ngOnInit(): void {}
}
