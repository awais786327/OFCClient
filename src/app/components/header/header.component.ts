import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isPublicRoute: boolean = false;
  slickSliderLoaded = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        if (document.location.pathname.includes('onboarding')) {
          this.isPublicRoute = true;
          this.slickSliderLoaded = false;
        } else {
          this.isPublicRoute = false;
          setTimeout(() => {
            this.jqueryLoad();
          }, 500);
        }
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.jqueryLoad();
  }

  jqueryLoad() {
    /*Chat_Box*/
    $('.chat_icon').click(function () {
      $('.chat_box').addClass('active');
      event.stopPropagation();
      return false;
    });

    $('.chat_box').click(function () {
      event.stopPropagation();
    });

    $('html').click(function () {
      $('#my-project-menu, #my-project').removeClass('active');
      $('#my-group-menu, #my-group').removeClass('active');
      $('.chat_box, .chat_box .person_chat, .chat_box .person_chat .message_typer .upload_flex').removeClass('active');
    });

    $('.chat_box .msg_flex').click(function () {
      $('.chat_box .person_chat').addClass('active');
    });

    $('.chat_box .person_chat .back_icon').click(function () {
      $('.chat_box .person_chat').removeClass('active');
      return false;
    });

    if(!this.slickSliderLoaded){
      console.log('working..... 12')
      this.slickSliderLoaded = true;
      $('.chat_user_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
      });
    }
    

    /*Megadropdown 2*/
    $('#my-group').click(function () {
      $('.mega_dropdown, #my-project, #my-group').removeClass('active');
      $('#my-group-menu, #my-group').addClass('active');
      event.stopPropagation();
    });

    $("#my-group-menu a").click(function() {
      $('#my-group-menu, #my-group').removeClass('active');
    })

    /*Megadropdown 1*/

    $('#my-project').click(function () {
      $('.mega_dropdown, #my-project, #my-group').removeClass('active');
      $('#my-project-menu, #my-project').addClass('active');
      event.stopPropagation();
    });

    $('#my-project-menu').click(function () {
      event.stopPropagation();
    });

    $("#my-project-menu a").click(function() {
      $('#my-project-menu, #my-project').removeClass('active');
    })

    // merged 2 separate event which are doing same thing
    $('#my-group-menu, #my-project-menu').click(function () {
      event.stopPropagation();
    });

  }
}
