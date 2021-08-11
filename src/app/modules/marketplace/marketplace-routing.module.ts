import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardGridComponent } from './card-grid/card-grid.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardMapComponent } from './card-map/card-map.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'card-grid' },
      { path: 'card-grid', component: CardGridComponent },
      { path: 'card-list', component: CardListComponent },
      { path: 'card-map', component: CardMapComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
