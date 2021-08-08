import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  counter: any;

  constructor() {}

  ngOnInit(): void {
    this.counter = 0;
  }

  // tslint:disable-next-line:typedef
  go(index: any) {
    this.counter = index;
  }
}
