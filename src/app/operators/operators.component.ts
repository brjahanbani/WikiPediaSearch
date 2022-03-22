import { Component, OnInit } from '@angular/core';
import { Observable, from, Subject } from 'rxjs';
import { map, pluck, skipUntil } from 'rxjs/operators';

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

    //skipUntil
    const observableOne = new Observable((observer) => {
      let i = 1;
      setInterval(() => {
        observer.next(i++);
      }, 1000);
    });
    const observableTwo = new Subject();
    setTimeout(() => {
      observableTwo.next('hi');
    }, 3000);
    const newObse = observableOne.pipe(skipUntil(observableTwo));
    newObse.subscribe(console.log);
  }
}
