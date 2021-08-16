import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  steps: number = 0;
  constructor() {}

  ngOnInit(): void {}

  stepChange(step) {
    this.steps = step;
  }
}
