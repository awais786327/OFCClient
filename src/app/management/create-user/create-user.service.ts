import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor() { }

  // tslint:disable-next-line:typedef
  async getCaptcha() {
    return new Promise((resolve, reject) => {
      axios
        .get(`register/captcha`)
        .then((response: any) => {
          console.log('response:', response);
          // if (response.result && response.result.emailTemplates) {
          //   resolve(response.result.emailTemplates);
          // } else {
          //   resolve([]);
          // }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
