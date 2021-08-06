import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user-preferences',
  templateUrl: './create-user-preferences.component.html',
  styleUrls: ['./create-user-preferences.component.scss'],
})
export class CreateUserPreferencesComponent implements OnInit {
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
