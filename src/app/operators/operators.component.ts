import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observable = new Observable<string>((observer) => {
      observer.next('hi');
    }).pipe(map((val) => val.toUpperCase()));
    const observer = observable.subscribe((data) => {
      console.log(data);
    });

    from([
      { name: 'Babak', age: 34 },
      { name: 'Puria', age: 30 },
      { name: 'Hassan', age: 62 },
    ])
      .pipe(pluck('age'))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
