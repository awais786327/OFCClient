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
    function closeMenu() {
      $('.close-menu').click(function () {
        $(this).parent().removeClass('active');
        $('.navbar-light .navbar-nav .nav-link').removeClass('active');
      });
    }

    /*Chat_Box*/
    $(document).ready(function () {
      $('.chat_icon').click(function () {
        $('.notificate').removeClass('show').removeAttr('data-bs-popper');
        $('.bell_icon, .dropdown-menu, .dropdown-toggle').removeClass('show');
        $('.chat_box').addClass('active');
        event.stopPropagation();
        return false;
      });
      $('.chat_box').click(function () {
        event.stopPropagation();
      });
      $('html').click(function () {
        $('.chat_box, .chat_box .person_chat, .chat_box .person_chat .message_typer .upload_flex').removeClass(
          'active'
        );
      });
      $('.chat_box .msg_flex').click(function () {
        $('.chat_box .person_chat').addClass('active');
      });
      $('.chat_box .person_chat .back_icon').click(function () {
        $('.chat_box .person_chat').removeClass('active');
        return false;
      });
    });

    //Toggle function for menu dropdonws in mobile
    $('.navbar-light .navbar-nav .nav-link.dropdown-toggle').click(function () {
      if (!$(this).next().hasClass('cross-add')) {
        $(this).next().addClass('cross-add');
        $(this).next().prepend('<span class="close-menu-toggle">X</span>');
      }
      clickToggleMenu();
    });

    //add class in chat icon and bell icon for mobile
    $('.chat_icon').parent().addClass('item-50 item1-50');
    $('.bell_icon').parent().addClass('item-50 item2-50');
    $('.nav-item.item2-50').next().addClass('last-child');
    $('.bell_icon').parent().parent().addClass('flex-dir');

    //make dropdown stable when click on it
    $('.navbar-light .navbar-nav .dropdown .dropdown-menu.notificate').click(function () {
      event.stopPropagation();
    });

    //mobile dropdowns cross click function
    function clickToggleMenu() {
      $('.close-menu-toggle').click(function () {
        $('.dropdown-menu, .dropdown-toggle, .navbar-expand-lg .navbar-collapse').removeClass('show');
        $('.navbar-light .navbar-toggler').addClass('collapsed');
        $(this).parent().removeClass('show');
        $(this).parent().prev().removeClass('show');
      });
    }

    //chat box show in mobile
    $('.navbar-light .navbar-nav .nav-link.round_icon.chat_icon').click(function () {
      $('.dropdown-menu, .dropdown-toggle, .navbar-expand-lg .navbar-collapse').removeClass('show');
      $('.navbar-light .navbar-toggler').addClass('collapsed');
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

    /*Megadropdown 2*/
    $('#my-group').click(function () {
      $('.navbar-light .navbar-nav .nav-link').removeClass('active');
      var menu = $(this).attr('id');
      $('#' + menu + '-menu').prepend('<span class="close-menu">X</span>');
      $('#my-project-menu, #my-group-menu').removeClass('active');
      $('#' + menu + '-menu, #' + menu).addClass('active');
      event.stopPropagation();
      closeMenu();
    });
    $('#my-group-menu').click(function () {
      event.stopPropagation();
    });
    $('html').click(function () {
      $('#my-group-menu, #my-group').removeClass('active');
    });

    /*Megadropdown 1*/
    $('#my-project, #my-group').removeAttr('href');
    $('#my-project').click(function () {
      $('.navbar-light .navbar-nav .nav-link').removeClass('active');
      var menu = $(this).attr('id');
      $('#' + menu + '-menu').prepend('<span class="close-menu">X</span>');
      $('#my-project-menu, #my-group-menu').removeClass('active');
      $('#' + menu + '-menu, #' + menu).addClass('active');
      event.stopPropagation();
      closeMenu();
    });
    $('#my-project-menu').click(function () {
      event.stopPropagation();
    });
    $('html').click(function () {
      $('#my-project-menu, #my-project').removeClass('active');
    });

    // merged 2 separate event which are doing same thing
    $('#my-group-menu, #my-project-menu').click(function () {
      event.stopPropagation();
    });
  }
}
