import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserProfileComponent } from './management/create-user-profile/create-user-profile.component';
import { CreateGroupComponent } from './management/create-group/create-group.component';
import { CreateProjectComponent } from './management/create-project/create-project.component';

const routes: Routes = [
  {
    path: 'create-group',
    component: CreateGroupComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
  },
  {
    path: 'create-user-profile',
    component: CreateUserProfileComponent,
  },
  {
    path: 'management/create-user',
    loadChildren: () => import('./modules/management/create-user/create-user.module').then((m) => m.CreateUserModule),
  },
  {
    path: 'management/create-user-preferences',
    loadChildren: () =>
      import('./modules/management/create-user-preferences/create-user-preferences.module').then(
        (m) => m.CreateUserPreferencesModule
      ),
  },
  {
    path: 'marketplace',
    loadChildren: () => import('./modules/marketplace/marketplace.module').then((m) => m.MarketplaceModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile-routing.module').then((m) => m.ProfileRoutingModule),
  },
  // otherwise redirect to specific route
  { path: '**', redirectTo: 'grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
