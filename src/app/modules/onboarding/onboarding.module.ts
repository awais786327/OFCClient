import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetUsernameComponent } from './forget-username/forget-username.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';

@NgModule({
  declarations: [LoginComponent, ForgetUsernameComponent, ForgetPasswordComponent],
  imports: [CommonModule, OnboardingRoutingModule],
})
export class OnboardingModule {}
