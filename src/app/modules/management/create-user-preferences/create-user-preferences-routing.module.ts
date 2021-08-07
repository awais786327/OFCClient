import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserPreferencesComponent } from './create-user-preferences.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUserPreferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUserPreferencesRoutingModule {}
