import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AxiosInterceptorService } from './axios-interceptor.service';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './marketplace/grid/grid.component';
import { ListComponent } from './marketplace/list/list.component';
import { MapComponent } from './marketplace/map/map.component';
import { CreateGroupComponent } from './management/create-group/create-group.component';
import { CreateProjectComponent } from './management/create-project/create-project.component';
import { CreateUserProfileComponent } from './management/create-user-profile/create-user-profile.component';
import { CreateUserComponent } from './management/create-user/create-user.component';
import { CreateUserPreferencesComponent } from './management/create-user-preferences/create-user-preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
    ListComponent,
    MapComponent,
    CreateGroupComponent,
    CreateProjectComponent,
    CreateUserProfileComponent,
    CreateUserComponent,
    CreateUserPreferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    LoadingBarModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(axiosIn: AxiosInterceptorService) {}
}
