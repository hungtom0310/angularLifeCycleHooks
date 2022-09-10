import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  counter = 0;
  interval: any;

  @Input()
  channelName = '';
  constructor() {
    console.log('1.Child Contructor is called.');
  }

  ngOnInit(): void {
    console.log('1.Child OnInit is called.');

    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }
  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log('2.Child OnDestroy is called.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('3.Child OnChanges is called.', changes);
  }
}
