import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { CreateUserServiceV2 } from './create-user.service';
declare var $: any;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  isLoading: any = false;
  counter: any;
  captchaImageUrl: any;
  createUserFormPayload: any = {};
  captchaObject: any = {};

  constructor(
    private sanitizer: DomSanitizer,
    public loadingBarService: LoadingBarService,
    public createUserService: CreateUserServiceV2
  ) {
    this.loadingBarService.useRef().value$.subscribe((v: any) => (this.isLoading = !!v));
  }

  ngOnInit(): void {
    this.counter = 0;
    this.initCaptcha();
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

  async initCaptcha() {
    try {
      const result = await this.createUserService.getCaptcha();
      const { CaptchaKey, CaptchaCode, CaptchaImage } = result;
      this.captchaObject = { CaptchaKey, CaptchaCode };
      const contentType = 'image/png';
      const byteArray = new Uint8Array(CaptchaImage);
      const blob = new Blob([byteArray], { type: contentType });
      const blobUrl = URL.createObjectURL(blob);
      const sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
      this.captchaImageUrl = sanitizedUrl;
    } catch (error) {
      console.log('captcha error: ', error);
    }
  }

  async createUser(createUserForm: any) {
    if (createUserForm.invalid) {
      return;
    }
    try {
      const payload = { ...this.captchaObject, ...createUserForm.form.value };
      const result = await this.createUserService.createUser(payload);
      if (result) {
        createUserForm.reset();
        this.counter = 0;
      }
    } catch (error) {
      console.log('create user error: ', error);
    }
  }
}
