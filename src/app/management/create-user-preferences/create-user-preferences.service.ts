import { Injectable } from '@angular/core';
import { ToastrService as ToasterService } from 'ngx-toastr';
import axios from 'axios';
import { createApiUrl } from '../../utils/createApiUrl';
import { API_ENDPOINTS } from '../../constants/apiEndpoints';
import apiCaller from '../../utils/apiCaller';
import { fetchApiHeaders } from '../../utils/fetchApiHeaders';

@Injectable({
  providedIn: 'root',
})
export class CreateUserPreferencesService {
  constructor(private toastr: ToasterService) {}

  async createUserPreferences(payload: any) {
    try {
      const url = createApiUrl(API_ENDPOINTS.PROFILE);
      const response: any = await apiCaller.post(url, payload, fetchApiHeaders());
      if (response?.data?.UserId) {
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
