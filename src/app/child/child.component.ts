import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
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
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit
{
  counter = 0;
  interval: any;

  @Input()
  channelName = '';

  @ContentChild('projectedContent') protectedContent: any;

  constructor() {
    console.log('1.Child Contructor is called.');
  }

  ngOnInit(): void {
    console.log('1.Child OnInit is called.');
    console.log('6.OnInit - ' + this.protectedContent);
  }
  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log('2.Child OnDestroy is called.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('3.Child OnChanges is called.', changes);
    console.log('6.OnChanges - ' + this.protectedContent);
  }

  ngDoCheck(): void {
    console.log('4.Child DoCheck is called.');
    console.log('6.DoCheck - ' + this.protectedContent);
  }
  ngAfterContentInit(): void {
    console.log('5.In After Content Init');
    console.log('6.After Content Init - ' + this.protectedContent);
  }
}
