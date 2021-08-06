import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { CreateUserPreferencesService } from './create-user-preferences.service';

@Component({
  selector: 'app-create-user-preferences',
  templateUrl: './create-user-preferences.component.html',
  styleUrls: ['./create-user-preferences.component.scss'],
})
export class CreateUserPreferencesComponent implements OnInit {
  counter: any;
  isLoading: any = false;

  createUserPreferencesFormPayload: any = {
    FirstName: 'Mohammad',
    LastName: 'Awais',
    UserName: 'user111',
    NickName: 'awais',
    Email: 'awais3227443@gmail.com',
    Password: 'awais123123',
    Question: 'question 1',
    Answer: 'answer 1',
  };

  constructor(
    public loadingBarService: LoadingBarService,
    public createUserPreferencesService: CreateUserPreferencesService
  ) {
    this.loadingBarService
      .useRef()
      .value$.subscribe((v: any) => (this.isLoading = !!v));
  }

  ngOnInit(): void {
    this.counter = 0;
  }

  go(index: number): void {
    this.counter = index;
  }

  // tslint:disable-next-line:typedef
  async createUserPreferences(createUserPreferencesForm: any) {
    if (createUserPreferencesForm.invalid) {
      return;
    }
    try {
      const payload = {
        ...createUserPreferencesForm.form.value,
      };
      const result =
        await this.createUserPreferencesService.createUserPreferences(payload);
      if (result?.UserId) {
        createUserPreferencesForm.reset();
        this.counter = 0;
      }
    } catch (error) {
      console.log('create user error: ', error);
    }
  }
}
