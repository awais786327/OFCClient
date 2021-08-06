import { Injectable } from '@angular/core';
import { ToastrService as ToasterService } from 'ngx-toastr';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  constructor(private toastr: ToasterService) {}

  // tslint:disable-next-line:typedef
  async getCaptcha() {
    return await axios
      .get(`/register/captcha`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  // tslint:disable-next-line:typedef
  async createUser(payload: any) {
    return await axios({
      method: 'POST',
      url: `/register`,
      data: payload,
      headers: {
        hasLogs: false,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.MessageCode === 200) {
          this.toastr.success('User added successfully!', '');
        } else {
          this.toastr.error(response.data.Message, '');
          return null;
        }
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }
}
