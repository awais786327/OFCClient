import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateGroupComponent } from './management/create-group/create-group.component';
import { CreateProjectComponent } from './management/create-project/create-project.component';
import { CreateUserProfileComponent } from './management/create-user-profile/create-user-profile.component';
import { AxiosInterceptorServiceV2 } from './axiosInterceptorV2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateGroupComponent,
    CreateProjectComponent,
    CreateUserProfileComponent,
  ],
  imports: [
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
