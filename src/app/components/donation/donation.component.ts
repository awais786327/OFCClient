import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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

    $('.modal-header .btn-close').click(function () {
      $('#donation_popup, .modal-backdrop').removeClass('show');
      $('#donation_popup, .modal-backdrop').addClass('hide');

      setTimeout(() => {
        $('#donation_popup, .modal-backdrop').removeClass('d-block');
        $('#donation_popup, .modal-backdrop').addClass('d-none');
      }, 500);
    });
  }
}
