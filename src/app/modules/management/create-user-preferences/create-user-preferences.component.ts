import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { CreateUserPreferencesService } from './create-user-preferences.service';
declare var $: any;

@Component({
  selector: 'app-create-user-preferences',
  templateUrl: './create-user-preferences.component.html',
  styleUrls: ['./create-user-preferences.component.scss'],
})
export class CreateUserPreferencesComponent implements OnInit {
  counter: any;
  isLoading: any = false;

  createUserPreferencesFormPayload: any = {};
  
  constructor(
    public loadingBarService: LoadingBarService,
    public createUserPreferencesService: CreateUserPreferencesService,
    private route: ActivatedRoute
  ) {
    route.queryParamMap.subscribe((paramsMap: any) => {
      const { params } = paramsMap;
      this.counter = params.tab ? Number(params.tab) : 0;
      console.log("this.counter : ", this.counter)
    });

    this.loadingBarService.useRef().value$.subscribe((v: any) => (this.isLoading = !!v));
  }

  ngOnInit(): void {
    // this.counter = 0;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $(document).ready(function () {
      $('.create_section .create_steps .step_flex').click(function () {
        var e = $(this).index() + 1;
        $('.create_wrap .inner_wrap, .create_section .create_steps .step_flex').removeClass('active'),
          $('.create_wrap .inner_wrap:nth-child(' + e + ')').addClass('active'),
          $(this).addClass('active');
      });
    });
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
      const result = await this.createUserPreferencesService.createUserPreferences(payload);
      if (result?.UserId) {
        createUserPreferencesForm.reset();
        this.counter = 0;
      }
    } catch (error) {
      console.log('create user error: ', error);
    }
  }
}
