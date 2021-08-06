import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './create-user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingBarService } from '@ngx-loading-bar/core';

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
    public createUserService: CreateUserService
  ) {
    this.loadingBarService
      .useRef()
      .value$.subscribe((v: any) => (this.isLoading = !!v));
  }

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

  // tslint:disable-next-line:typedef
  async createUser(createUserForm: any) {
    if (createUserForm.invalid) {
      return;
    }
    try {
      const payload = { ...this.captchaObject, ...createUserForm.form.value };
      const result = await this.createUserService.createUser(payload);
      if (result) {
        createUserForm.reset();
      }
    } catch (error) {
      console.log('create user error: ', error);
    }
  }
}
