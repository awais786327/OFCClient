import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketplaceRoutingModule } from './marketplace-routing.module';

import { KendoModule } from '../../kendo/kendo.module';

import { MarketplaceHeaderComponent } from './shared/marketplace-header/marketplace-header.component';
import { MarketplaceSideMenuComponent } from './shared/marketplace-side-menu/marketplace-side-menu.component';

import { CardGridComponent } from './card-grid/card-grid.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardMapComponent } from './card-map/card-map.component';

@NgModule({
  declarations: [
    MarketplaceHeaderComponent,
    MarketplaceSideMenuComponent,
    CardGridComponent,
    CardListComponent,
    CardMapComponent,
  ],
  imports: [KendoModule, FormsModule, MarketplaceRoutingModule, CommonModule],
})
export class MarketplaceModule {}
