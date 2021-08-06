import { Injectable } from '@angular/core';
import { ToastrService as ToasterService } from 'ngx-toastr';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CreateUserPreferencesService {
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
  async createUserPreferences(payload: any) {
    return await axios({
      method: 'POST',
      url: `/profile`,
      data: payload,
      headers: {
        hasLogs: false,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response?.data?.UserId) {
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
