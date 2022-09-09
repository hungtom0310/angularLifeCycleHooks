import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnChanges {
  isChild = true;
  constructor() {
    console.log('1.Parent Contructor is called.');
  }

  ngOnInit(): void {
    console.log('1.Parent OnInit is called.');
  }

  ngOnChanges(): void {
    console.log('3.Parent OnChanges is called.');
  }
  toggleChild() {
    this.isChild = !this.isChild;
  }
}
