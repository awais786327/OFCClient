import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetUsernameComponent } from './forget-username/forget-username.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'forget-username', component: ForgetUsernameComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
      // { path: 'onboarding', redirectTo: '/login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
