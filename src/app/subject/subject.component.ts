import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const obs = new Observable((observer) => {
      observer.next(1);
    });

    const subject = new Subject();
    const observerOne = subject.subscribe(
      (value) => console.log(`Observer 1: ${value}`),
      (err) => console.error(err),
      () => console.log('Oserver completed')
    );
    subject.next('hi');

    const observerTwo = subject.subscribe(
      (value) => console.log(`Observer 2: ${value}`),
      (err) => console.error(err),
      () => console.log('Oserver completed')
    );
    subject.next('Good Afternoon');
    observerTwo.unsubscribe();
    subject.next('bye');
  }
}
