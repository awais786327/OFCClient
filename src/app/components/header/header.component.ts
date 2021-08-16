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

    if (!this.slickSliderLoaded) {
      console.log('working..... 12');
      this.slickSliderLoaded = true;
      $('.chat_user_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
      });
    }

    function clickToggleMenu() {
      $('.close-menu-toggle').click(function () {
        $('.dropdown-menu, .dropdown-toggle, .navbar-expand-lg .navbar-collapse').removeClass('show'),
          $('.navbar-light .navbar-toggler').addClass('collapsed'),
          $(this).parent().removeClass('show'),
          $(this).parent().prev().removeClass('show');
      });
    }

    function closeMenu() {
      $('.close-menu').click(function () {
        $(this).parent().removeClass('active'), $('.navbar-light .navbar-nav .nav-link').removeClass('active');
      });
    }

    /*Megadropdown 2*/
    $('#my-group').click(function () {
      // $('.mega_dropdown, #my-project, #my-group').removeClass('active');
      // $('#my-group-menu, #my-group').addClass('active');
      // event.stopPropagation();

      $("#my-group-menu .close-menu").remove(); // remove all prepended element from dom


      $('.navbar-light .navbar-nav .nav-link').removeClass('active');
      var e = $(this).attr('id');
      $('#' + e + '-menu').prepend('<span class="close-menu">X</span>'),
        $('#my-project-menu, #my-group-menu').removeClass('active'),
        $('#' + e + '-menu, #' + e).addClass('active'),
        event.stopPropagation(),
        closeMenu();
    });

    $('#my-group-menu a').click(function () {
      $('#my-group-menu, #my-group').removeClass('active');
      // $(".navbar-toggler").click()
    });

    /*Megadropdown 1*/

    $('#my-project').click(function () {
      // $('.mega_dropdown, #my-project, #my-group').removeClass('active');
      // $('#my-project-menu, #my-project').addClass('active');
      // event.stopPropagation();

      $("#my-project-menu .close-menu").remove(); // remove all prepended element from dom

      $('.navbar-light .navbar-nav .nav-link').removeClass('active');
      var e = $(this).attr('id');
      $('#' + e + '-menu').prepend('<span class="close-menu">X</span>'),
        $('#my-project-menu, #my-group-menu').removeClass('active'),
        $('#' + e + '-menu, #' + e).addClass('active'),
        event.stopPropagation(),
        closeMenu();
    });

    $('#my-project-menu').click(function () {
      event.stopPropagation();
    });

    $('#my-project-menu a').click(function () {
      $('#my-project-menu, #my-project').removeClass('active');
      // $(".navbar-toggler").click()
    });

    // merged 2 separate event which are doing same thing
    $('#my-group-menu, #my-project-menu').click(function () {
      event.stopPropagation();
    });

    $(".mega_dropdown a").click(function(){
      $(".navbar-toggler").click();
    })

    // 
    $(".navbar-light .navbar-nav .nav-link.dropdown-toggle").click(function () {
      $(this).next().hasClass("cross-add") ||
        ($(this).next().addClass("cross-add"),
        $(this).next().prepend('<span class="close-menu-toggle">X</span>')),
        clickToggleMenu();
    }),
    $(".chat_icon").parent().addClass("item-50 item1-50"),
    $(".bell_icon").parent().addClass("item-50 item2-50"),
    $(".nav-item.item2-50").next().addClass("last-child"),
    $(".bell_icon").parent().parent().addClass("flex-dir"),
    $(".navbar-light .navbar-nav .dropdown .dropdown-menu.notificate").click(
      function () {
        event.stopPropagation();
      }
    ),
    $(".navbar-light .navbar-nav .nav-link.round_icon.chat_icon").click(
      function () {
        $(
          ".dropdown-menu, .dropdown-toggle, .navbar-expand-lg .navbar-collapse"
        ).removeClass("show"),
          $(".navbar-light .navbar-toggler").addClass("collapsed");
      }
    ),
    $(document).ready(function () {
      $(".chat_box .person_chat .message_typer .btn-white").click(function () {
        $(".chat_box .person_chat .message_typer .upload_flex").toggleClass(
          "active"
        );
      });
    });
    // 
    
  }
}
