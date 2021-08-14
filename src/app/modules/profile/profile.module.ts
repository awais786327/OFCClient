import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

import { KendoModule } from '../../kendo/kendo.module';

import { ProfileHeaderComponent } from './shared/profile-header/profile-header.component';

import { GroupComponent } from './group/group.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [ProfileHeaderComponent, GroupComponent, ProjectComponent, ProjectDetailComponent],
  imports: [KendoModule, FormsModule, ProfileRoutingModule, CommonModule],
})
export class ProfileModule {}
