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

    $('.modal-header .btn-close').click(() => {
      this.hideModal();
    });
  }

  hideModal(){
    $('.modal, .modal-backdrop').removeClass('show');
    $('.modal, .modal-backdrop').addClass('hide');

    setTimeout(() => {
      $('.modal, .modal-backdrop').removeClass('d-block');
      $('.modal, .modal-backdrop').addClass('d-none');
    }, 500);
  }

  openCheckoutModal(){
    this.hideModal();

    setTimeout(() => {
      $("#checkout_popup, .modal-backdrop").removeClass("hide d-none");
      // $('.modal-backdrop').removeClass('hide d-none');

      $("#checkout_popup, .modal-backdrop").addClass("show d-block");
      // $('.modal-backdrop').addClass('show d-block');
    }, 500);
  }

  openAttachmentModal(){
    this.hideModal();

    setTimeout(() => {
      $("#upload, .modal-backdrop").removeClass("hide d-none");
      // $('.modal-backdrop').removeClass('hide d-none');

      $("#upload, .modal-backdrop").addClass("show d-block");
      // $('.modal-backdrop').addClass('show d-block');
    }, 500);
  }
}
