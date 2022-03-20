import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const subject = new BehaviorSubject('initial value');
    const observerOne = subject.subscribe(
      (val) => console.log('observerOne:' + val),
      (err) => console.error(err),
      () => console.log('observerOne completed')
    );
    subject.next('first');
    subject.next('second');
    setTimeout(() => {
      const observerTwo = subject.subscribe(
        (val) => console.log('observerTwo:' + val),
        (err) => console.error(err),
        () => console.log('observerTwo completed')
      );
    }, 5000);

    subject.next('third');
    subject.next('fourth');

    setInterval(() => {
      subject.next('fifth');
    }, 7000);
  }
}
