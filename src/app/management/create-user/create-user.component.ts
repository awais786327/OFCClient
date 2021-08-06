import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  counter: any;
  isLoading: any = false;
  createUserFormPayload: any = {};

  constructor(public createUserService: CreateUserService) {}

  ngOnInit(): void {
    this.counter = 0;
    this.initCaptcha();
  }

  go(index: number): void {
    this.counter = index;
  }

  // tslint:disable-next-line:typedef
  async initCaptcha() {
    try {
      const result = await this.createUserService.getCaptcha();
      console.log('captcha result:', result);
    } catch (error) {
      console.log('captcha error: ', error);
    }
  }

  createUser(createUserForm: any): void {
    console.log(createUserForm);
  }
}
