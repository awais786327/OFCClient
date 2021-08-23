import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  selectedTab: string = ''
  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe((paramsMap: any) => {
      const { params } = paramsMap;
      this.selectedTab = params.tab ? params.tab : 'overview-tab';
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if($(`#${this.selectedTab}`)[0]) {
      $(`#${this.selectedTab}`)[0].click()
    } else {
      $(`#overview-tab`)[0].click()
    }
  }

}
