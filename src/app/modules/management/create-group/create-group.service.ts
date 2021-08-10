import { Injectable } from '@angular/core';
import { ToastrService as ToasterService } from 'ngx-toastr';
import { API_ENDPOINTS } from '../../../constants/apiEndpoints';
import apiCaller from '../../../utils/apiCaller';
import { createApiUrl } from '../../../utils/createApiUrl';
import { fetchApiHeaders } from '../../../utils/fetchApiHeaders';

@Injectable({
  providedIn: 'root',
})
export class CreateGroupService {
  constructor(private toastr: ToasterService) {}

  async addGroup(payload) {
    try {
      const url = createApiUrl(API_ENDPOINTS.ADD_GROUP);
      const response: any = await apiCaller.post(url, payload, fetchApiHeaders());
      return response.data && response.data;
    } catch (error) {
      return error;
    }
  }
}
