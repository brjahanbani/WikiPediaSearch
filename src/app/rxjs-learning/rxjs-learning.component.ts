import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

type Subscription = any;

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  sub: Subscription;
  observable = new Observable((observer) => {
    observer.next('Helllloooo');
    observer.next('How are youuuuu???');
    setInterval(() => {
      observer.next('I am Goooood');
    }, 2000); //6000
  });

  constructor() {}

  ngOnInit(): void {
    this.sub = this.observable.subscribe(
      //Handle Data
      (value) => this.addItem('my value is :' + value),

      //Handle error
      (error) => console.log(error),

      //Completion
      () => console.log('complete')
    );

    setTimeout(() => {
      this.sub.unsubscribe();
    }, 6001);
  }

  addItem(value: any) {
    console.log(value);
  }
}
