import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ToastrService } from 'ngx-toastr';

const token = '972d06df-b5ef-4aa0-9578-9a4b96b170e6'; // temporary authentication

@Injectable({
  providedIn: 'root',
})
export class AxiosInterceptorServiceV2 {
  loadingBar: any;
  constructor(private loadingBarService: LoadingBarService, private toastr: ToastrService) {
    this.loadingBar = this.loadingBarService.useRef();
    this.initAxiosInterceptor();
  }

  initAxiosInterceptor() {
    axios.interceptors.request.use(
      (request): AxiosRequestConfig => {
        if (request.headers.token) {
          request.headers.common[`Authorization`] = localStorage.getItem('token') || token;
        }

        if (request.headers.hasLoading) {
          this.loadingBar.start();
        }
        return request;
      },
      (error) => {
        this.loadingBar.stop();
        this.toastr.error(error && error.message, 'Error');
        throw new Error(error);
      }
    );

    axios.interceptors.response.use(
      (response): AxiosResponse => {
        this.loadingBar.stop();
        return response;
      },
      (error) => {
        this.loadingBar.stop();
        if (error.config.headers.showToast) {
          this.toastr.error(error && error.message, 'Error');
        }
        return Promise.reject(error);
      }
    );
  }
}
