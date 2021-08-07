import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService as ToasterService } from 'ngx-toastr';
import { environment } from '../environments/environment';
import axios from 'axios';

const token = '972d06df-b5ef-4aa0-9578-9a4b96b170e6'; // temporary authentication

axios.defaults.baseURL = environment.baseURL;
axios.defaults.headers[`hasLogs`] = false;
axios.defaults.headers[`hasToken`] = true;
axios.defaults.headers[`hasLoading`] = true;
axios.defaults.headers[`showToast`] = true;

let inResponseError = false;

@Injectable({
  providedIn: 'root',
})
export class AxiosInterceptorService {
  loadingBar = this.loadingBarService.useRef();

  constructor(private loadingBarService: LoadingBarService, private toastr: ToasterService) {
    this.initAxiosInterceptor();
    // this.initAuthRefreshInterceptor();
  }

  // tslint:disable-next-line:typedef
  initAxiosInterceptor() {
    axios.interceptors.request.use(
      (request) => {
        this.loadingBar.start();

        // @ts-ignore
        request.url = request.baseURL + request.url;

        if (request.headers.hasLogs) {
          console.log('request:', request);
        }
        if (request.headers.hasToken) {
          request.headers.common[`Authorization`] = localStorage.getItem('token') || token;
        }
        if (request.headers.hasLoading) {
        }

        return request;
      },
      (error) => {
        this.loadingBar.stop();
        this.toastr.error(error && error.message, 'Error');
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        this.loadingBar.stop();

        if (response.config.headers.hasLogs) {
          console.log('response:', response);
        }

        inResponseError = false;
        return response;
      },
      (error) => {
        if (inResponseError) {
          this.loadingBar.stop();
          return Promise.reject(error);
        } else if (
          !inResponseError &&
          error.response &&
          error.response.status !== 403 &&
          error.config.headers.showToast
        ) {
          this.toastr.error(error && error.message, 'Error');
        }

        // handle unexpected 403 forbidden request
        const err = error.response;
        if (err && err.status === 403) {
          inResponseError = true;
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          this.toastr.error('Invalid Login or token expired');
          setTimeout(() => {
            window.location.href = '/';
          }, 5000);
          return axios(error.config);
        }

        this.loadingBar.stop();

        return Promise.reject(error);
      }
    );
  }
}
