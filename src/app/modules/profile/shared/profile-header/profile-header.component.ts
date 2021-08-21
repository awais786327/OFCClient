import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*Modal Steps plugin*/
    $('.modal_steps .steps-btn').click(function () {
      var indexClass = $(this).attr('indexClass');
      var indexnocount = parseInt($(this).attr('indexno'));
      var indexno = indexnocount + 1;

      if (indexno == $('.' + indexClass).length + 1) {
        return false;
      }

      $('.' + indexClass).removeClass('active');
      $('.' + indexClass + indexno).addClass('active');
    });

    $('.modal_steps .cancel_link').click(function () {
      var className = $('.modal_steps .steps-btn').attr('indexClass');
      $('.' + className).removeClass('active');
      $('.' + className + '1').addClass('active');
    });
  }

  hideModal(eleId) {
    $(`#${eleId}`).click();
  }

}
