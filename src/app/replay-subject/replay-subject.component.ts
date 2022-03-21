import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css'],
})
export class ReplaySubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const replaySubject = new ReplaySubject(3); //number is the length of buffer
    const observerOne = replaySubject.subscribe((val) =>
      console.log('observerOne:' + val)
    );
    replaySubject.next('first');
    replaySubject.next('second');
    replaySubject.next('third');
    replaySubject.next('fourth');
    const observerTwo = replaySubject.subscribe((val) =>
      console.log('observerTwo:' + val)
    );
    replaySubject.next('fifth');
  }
}
