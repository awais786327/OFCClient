import { Component, OnInit } from '@angular/core';
import { CreateGroupService } from './create-group.service';
declare var $: any;

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent implements OnInit {
  counter: any;
  isLoading: any = false;

  groupFormPayload: any = {};
  /*{
    "Groupname": "Pilot Group 1",
    "Description": "Pilot Group 1",
    "Tags": "Pilot Group 1",
    "Location": "Ahmdabad",
    "IsGlobal": "true",
    "AllowProfile": "true",
    "IsPublic": "true",
    "GroupTypeID": 1,
    "IsAllowUserToInvite": "true",
    "MemberList": [1,31,32]
  }*/

  constructor(public creteGroupService: CreateGroupService) {}

  ngOnInit(): void {
    this.counter = 0;
  }

  // tslint:disable-next-line:typedef
  go(index: any) {
    this.counter = index;
  }

  // tslint:disable-next-line:typedef
  async addGroup(groupForm: any) {
    const payload = {
      IsGlobal: 'true',
      AllowProfile: 'true',
      IsPublic: 'true',
      GroupTypeID: 1,
      IsAllowUserToInvite: 'true',
      MemberList: [1, 31, 32],
      ...groupForm.form.value,
    };
    console.log(payload);
    const result = await this.creteGroupService.addGroup(payload);
    if (result) {
      groupForm.reset();
      this.counter = 0;
    }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $(document).ready(function () {
      $('.create_section .create_steps .step_flex').click(function () {
        var e = $(this).index() + 1;
        $('.create_wrap .inner_wrap, .create_section .create_steps .step_flex').removeClass('active'),
          $('.create_wrap .inner_wrap:nth-child(' + e + ')').addClass('active'),
          $(this).addClass('active');
      });
    });
  }
}
