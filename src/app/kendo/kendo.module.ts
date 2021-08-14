import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { RtfeditorComponent } from './rtfeditor/rtfeditor.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AutocompleteComponent, RtfeditorComponent, MapComponent],
  imports: [CommonModule],
  exports: [AutocompleteComponent, RtfeditorComponent, MapComponent],
})
export class KendoModule {}
