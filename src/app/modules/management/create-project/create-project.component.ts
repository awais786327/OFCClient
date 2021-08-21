import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  counter: any;

  constructor() {}

  ngOnInit(): void {
    this.counter = 0;
  }

  // tslint:disable-next-line:typedef
  go(index: any) {
    this.counter = index;
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
