import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @Input() placeholder = 'Search...';

  id: any = Math.random().toString(36).substr(2, 9);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $('#app-autocomplete-' + this.id).kendoAutoComplete({
      dataSource: [
        'Albania',
        'Armenia',
        'Austria',
        'Azerbaijan',
        'Belgium',
        'Bulgaria',
        'San Marino',
        'Spain',
        'Sweden',
        'Switzerland',
        'Turkey',
        'Ukraine',
        'United Kingdom',
      ],
      filter: 'startswith',
      placeholder: this.placeholder,
      separator: ', ',
    });
  }
}
