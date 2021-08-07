import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserPreferencesComponent } from './create-user-preferences.component';
import { CreateUserPreferencesRoutingModule } from './create-user-preferences-routing.module';

@NgModule({
  declarations: [CreateUserPreferencesComponent],
  imports: [CommonModule, CreateUserPreferencesRoutingModule, FormsModule],
})
export class CreateUserPreferencesModule {}
