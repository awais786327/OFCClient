import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupComponent } from './group/group.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'group', component: GroupComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'project-detail', component: ProjectDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
