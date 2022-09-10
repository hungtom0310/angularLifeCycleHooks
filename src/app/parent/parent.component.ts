import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  isChild = true;
  channelName = '';

  constructor() {
    console.log('1.Parent Contructor is called.');
  }

  ngOnInit(): void {
    console.log('1.Parent OnInit is called.');
  }

  ngOnChanges(): void {
    console.log('3.Parent OnChanges is called.');
  }

  ngDoCheck(): void {
    console.log('4.Parent DoCheck is called.');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
