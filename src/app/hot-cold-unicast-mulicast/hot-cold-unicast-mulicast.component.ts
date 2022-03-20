import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-hot-cold-unicast-mulicast',
  templateUrl: './hot-cold-unicast-mulicast.component.html',
  styleUrls: ['./hot-cold-unicast-mulicast.component.css'],
})
export class HotColdUnicastMulicastComponent implements OnInit {
  observable = new Observable((observer) => {
    observer.next('Testing Pipe for Multicast');
    observer.next('This will be shown on just ObservableOne');
    setInterval(() => {
      observer.next('I am the Same Messege');
    }, 2000);
  }).pipe(share());

  constructor() {}

  ngOnInit(): void {
    const observerOne = this.observable.subscribe(
      (value) => this.addItem('observerOne:' + value),
      (error) => console.log(error),
      () => console.log('complete')
    );

    setTimeout(() => {
      const observerOne = this.observable.subscribe(
        (value) => this.addItem('observerTwo:' + value),
        (error) => console.log(error),
        () => console.log('complete')
      );
    }, 6001);
  }
  addItem(value: any) {
    console.log(value);
  }
}
