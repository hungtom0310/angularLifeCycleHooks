import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor() {
    console.log('1.Child Contructor is called.');
  }

  ngOnInit(): void {
    console.log('1.Child OnInit is called.');
  }
}
