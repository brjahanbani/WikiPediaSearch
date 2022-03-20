import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
type Subscription = any;

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  sub: Subscription;
  constructor() {}

  ngOnInit(): void {
    let obs = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(++count);
        if (count === 5) {
          observer.error(new Error('Count reached 5'));
        }
        //it will be completed before 6 (because of error)
        if (count === 6) {
          observer.complete();
        }
      }, 1000);
    });

    this.sub = obs.subscribe(
      (count) => console.log(count),
      (error) => {
        console.log('Error would be : ' + error);
      },
      () => {
        console.log('done');
      }
    );

    setTimeout(() => {
      this.sub.unsubscribe();
    }, 5001);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
