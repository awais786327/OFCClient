import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GridComponent } from './marketplace/grid/grid.component';
import { ListComponent } from './marketplace/list/list.component';
import { MapComponent } from './marketplace/map/map.component';
import { CreateUserPreferencesComponent } from './management/create-user-preferences/create-user-preferences.component';
import { CreateUserComponent } from './management/create-user/create-user.component';
import { CreateUserProfileComponent } from './management/create-user-profile/create-user-profile.component';
import { CreateGroupComponent } from './management/create-group/create-group.component';
import { CreateProjectComponent } from './management/create-project/create-project.component';

const routes: Routes = [
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'create-group',
    component: CreateGroupComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
  },
  {
    path: 'create-user-preferences',
    component: CreateUserPreferencesComponent,
  },
  {
    path: 'create-user-profile',
    component: CreateUserProfileComponent,
  },
  // otherwise redirect to specific route
  { path: '**', redirectTo: 'grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
