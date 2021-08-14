import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  id: any = Math.random().toString(36).substr(2, 9);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $('#app-map-' + this.id).kendoMap({
      center: [30.268107, -97.744821],
      zoom: 3,
      layers: [
        {
          type: 'tile',
          urlTemplate: 'https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png',
          subdomains: ['a', 'b', 'c'],
          attribution: "&copy; <a href='https://osm.org/copyright'>OpenStreetMap contributors</a>",
        },
      ],
      markers: [
        {
          location: [30.268107, -97.744821],
          shape: 'pinTarget',
          tooltip: {
            content: 'Austin, TX',
          },
        },
      ],
    });
  }
}
