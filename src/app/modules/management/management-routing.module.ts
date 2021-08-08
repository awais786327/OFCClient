import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserPreferencesComponent } from './create-user-preferences/create-user-preferences.component';
import { CreateUserProfileComponent } from './create-user-profile/create-user-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create-group', component: CreateGroupComponent },
      { path: 'create-project', component: CreateProjectComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'create-user-preferences', component: CreateUserPreferencesComponent },
      { path: 'create-user-profile', component: CreateUserProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
