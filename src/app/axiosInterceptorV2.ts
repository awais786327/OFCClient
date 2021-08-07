import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AxiosInterceptorServiceV2 {
  loadingBar: any;
  constructor(private loadingBarService: LoadingBarService, private toastr: ToastrService) {
    debugger;
    this.loadingBar = this.loadingBarService.useRef();
    this.initAxiosInterceptor();
  }

  initAxiosInterceptor() {
    axios.interceptors.request.use(
      (request): AxiosRequestConfig => {
        console.log('it come here');
        debugger;
        if (request.headers.hasLoading) {
          this.loadingBar.start();
        }
        return request;
      },
      (error) => {
        this.loadingBar.stop();
        throw new Error(error);
      }
    );

    axios.interceptors.response.use(
      (response): AxiosResponse => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
