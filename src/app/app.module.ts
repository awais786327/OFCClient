import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { KendoModule } from './kendo/kendo.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AxiosInterceptorServiceV2 } from './axiosInterceptorV2';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotificationsComponent],
  imports: [
    KendoModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LoadingBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(axiosIn: AxiosInterceptorServiceV2) {}
}
