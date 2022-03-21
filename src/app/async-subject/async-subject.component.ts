import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css'],
})
export class AsyncSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const asyncSubject = new AsyncSubject();
    const observerOne = asyncSubject.subscribe(
      (data: any) => console.log('observerOne:' + data),
      (err: any) => console.error(err),
      () => console.log('complete')
    );
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.next(4);

    const observerTwo = asyncSubject.subscribe(
      (data: any) => console.log('observerTwo:' + data),
      (err: any) => console.error(err),
      () => console.log('complete')
    );

    asyncSubject.complete(); // asyncSubject's nature to observe and complete
  }
}
