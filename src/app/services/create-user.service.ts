import { Injectable } from '@angular/core';
import { ToastrService as ToasterService } from 'ngx-toastr';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import apiCaller from '../utils/apiCaller';
import { createApiUrl } from '../utils/createApiUrl';
import { fetchApiHeaders } from '../utils/fetchApiHeaders';

@Injectable({
  providedIn: 'root',
})
export class CreateUserServiceV2 {
  constructor(private toastr: ToasterService) {}

  async getCaptcha() {
    try {
      const url = createApiUrl(API_ENDPOINTS.REGISTER_CAPTCHA);
      const response: any = await apiCaller.get(url, fetchApiHeaders());
      return response.data && response.data;
    } catch (error) {
      return error;
    }
  }

  async createUser(payload: any) {
    try {
      const url = createApiUrl(API_ENDPOINTS.REGISTER);
      const response: any = await apiCaller.post(url, payload, fetchApiHeaders());
      if (response.data.MessageCode === 200) {
        this.toastr.success('User added successfully!', '');
      } else {
        this.toastr.error(response.data.Message, '');
        return;
      }
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
