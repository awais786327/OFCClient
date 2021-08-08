import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

import { GroupComponent } from './group/group.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProfileHeaderComponent } from './shared/profile-header/profile-header.component';

@NgModule({
  declarations: [GroupComponent, ProjectComponent, ProjectDetailComponent, ProfileHeaderComponent],
  imports: [FormsModule, ProfileRoutingModule, CommonModule],
})
export class ProfileModule {}
