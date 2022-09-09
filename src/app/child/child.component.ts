import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('1.Child Contructor is called.');
  }

  ngOnInit(): void {
    console.log('1.Child OnInit is called.');
  }
  ngOnDestroy(): void {
    console.log('2.Child OnDestroy is called.');
  }
}
