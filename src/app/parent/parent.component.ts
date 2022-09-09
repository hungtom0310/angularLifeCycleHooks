import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  isChild = false;
  constructor() {
    console.log('1.Parent Contructor is called.');
  }

  ngOnInit(): void {
    console.log('1.Parent OnInit is called.');
  }
  toggleChild() {
    this.isChild = !this.isChild;
  }
}
