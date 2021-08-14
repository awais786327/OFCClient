import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-rtfeditor',
  templateUrl: './rtfeditor.component.html',
  styleUrls: ['./rtfeditor.component.scss'],
})
export class RtfeditorComponent implements OnInit, AfterViewInit {
  id: any = Math.random().toString(36).substr(2, 9);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $('#app-rtf-editor-' + this.id).kendoEditor({
      stylesheets: [
        'https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/base.css',
        'https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/theme.css',
      ],
    });
  }
}
