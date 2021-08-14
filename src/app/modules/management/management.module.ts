import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementRoutingModule } from './management-routing.module';

import { KendoModule } from '../../kendo/kendo.module';

import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserPreferencesComponent } from './create-user-preferences/create-user-preferences.component';
import { CreateUserProfileComponent } from './create-user-profile/create-user-profile.component';

@NgModule({
  declarations: [
    CreateGroupComponent,
    CreateProjectComponent,
    CreateUserComponent,
    CreateUserPreferencesComponent,
    CreateUserProfileComponent,
  ],
  imports: [KendoModule, FormsModule, ManagementRoutingModule, CommonModule],
})
export class ManagementModule {}
