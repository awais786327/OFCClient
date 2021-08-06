import { Component, OnInit } from '@angular/core';

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
    groupName: 'Pilot Group',
    description: 'Pilot Group',
    tags: 'Pilot Group',
    location: 'Ahmdabad',
    isGlobal: 'true',
    allowProfile: 'true',
    isPublic: 'true',
    groupTypeID: 1,
    isAllowUserToInvite: 'true',
    memberList: [1, 31, 32],
  }*/

  constructor() {}

  ngOnInit(): void {
    this.counter = 0;
  }

  // tslint:disable-next-line:typedef
  go(index: any) {
    this.counter = index;
  }

  // tslint:disable-next-line:typedef
  addGroup(groupForm: any) {
    console.log(groupForm);
  }
}
