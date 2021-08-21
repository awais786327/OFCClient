function closeMenu() {
  $('.close-menu').click(function () {
    $(this).parent().removeClass('active'), $('.navbar-light .navbar-nav .nav-link').removeClass('active');
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
$('#my-project, #my-group').removeAttr('href'),
  $('#my-project').click(function () {
    $('.navbar-light .navbar-nav .nav-link').removeClass('active');
    var e = $(this).attr('id');
    $('#' + e + '-menu').prepend('<span class="close-menu">X</span>'),
      $('#my-project-menu, #my-group-menu').removeClass('active'),
      $('#' + e + '-menu, #' + e).addClass('active'),
      event.stopPropagation(),
      closeMenu();
  }),
  $('#my-project-menu').click(function () {
    event.stopPropagation();
  }),
  $('html').click(function () {
    $('#my-project-menu, #my-project').removeClass('active');
  }),
  $('#my-group').click(function () {
    $('.navbar-light .navbar-nav .nav-link').removeClass('active');
    var e = $(this).attr('id');
    $('#' + e + '-menu').prepend('<span class="close-menu">X</span>'),
      $('#my-project-menu, #my-group-menu').removeClass('active'),
      $('#' + e + '-menu, #' + e).addClass('active'),
      event.stopPropagation(),
      closeMenu();
  }),
  $('#my-group-menu').click(function () {
    event.stopPropagation();
  }),
  $('html').click(function () {
    $('#my-group-menu, #my-group').removeClass('active');
  }),
  $('.chat_user_slider').slick({ infinite: !0, slidesToShow: 6, slidesToScroll: 1 }),
  $('.modal_steps .steps-btn').click(function () {
    var e = $(this).attr('indexClass'),
      a = parseInt($(this).attr('indexno')) + 1;
    if (a == $('.' + e).length + 1) return !1;
    $('.' + e).removeClass('active'), $('.' + e + a).addClass('active');
  }),
  $('.modal_steps .cancel_link').click(function () {
    var e = $('.modal_steps .steps-btn').attr('indexClass');
    $('.' + e).removeClass('active'), $('.' + e + '1').addClass('active');
  }),
  $('.form_with_searchDrop').find('.search_dropdown').css('display', 'none'),
  $('.form_with_searchDrop .search_dropdown--btn').click(function (e) {
    event.stopPropagation(), $('.form_with_searchDrop').find('.search_dropdown').css('display', 'block');
  }),
  $('.search_dropdown').click(function (e) {
    event.stopPropagation(), $('.form_with_searchDrop').find('.search_dropdown').css('display', 'block');
  }),
  $('html').click(function () {
    $('.form_with_searchDrop').find('.search_dropdown').css('display', 'none');
  }),
  $(document).ready(function () {
    $('.chat_icon').click(function () {
      return (
        $('.notificate').removeClass('show').removeAttr('data-bs-popper'),
        $('.bell_icon, .dropdown-menu, .dropdown-toggle').removeClass('show'),
        $('.chat_box').addClass('active'),
        event.stopPropagation(),
        !1
      );
    }),
      $('.chat_box').click(function () {
        event.stopPropagation();
      }),
      $('html').click(function () {
        $('.chat_box, .chat_box .person_chat, .chat_box .person_chat .message_typer .upload_flex').removeClass(
          'active'
        );
      }),
      $('.chat_box .msg_flex').click(function () {
        $('.chat_box .person_chat').addClass('active');
      }),
      $('.chat_box .person_chat .back_icon').click(function () {
        return $('.chat_box .person_chat').removeClass('active'), !1;
      });
  }),
  $(document).ready(function () {
    $('.create_section .create_steps .step_flex').click(function () {
      var e = $(this).index() + 1;
      $('.create_wrap .inner_wrap, .create_section .create_steps .step_flex').removeClass('active'),
        $('.create_wrap .inner_wrap:nth-child(' + e + ')').addClass('active'),
        $(this).addClass('active');
    });
  }),
  $('.navbar-light .navbar-nav .nav-link.dropdown-toggle').click(function () {
    $(this).next().hasClass('cross-add') ||
      ($(this).next().addClass('cross-add'), $(this).next().prepend('<span class="close-menu-toggle">X</span>')),
      clickToggleMenu();
  }),
  $('.chat_icon').parent().addClass('item-50 item1-50'),
  $('.bell_icon').parent().addClass('item-50 item2-50'),
  $('.nav-item.item2-50').next().addClass('last-child'),
  $('.bell_icon').parent().parent().addClass('flex-dir'),
  $('.navbar-light .navbar-nav .dropdown .dropdown-menu.notificate').click(function () {
    event.stopPropagation();
  }),
  $('.navbar-light .navbar-nav .nav-link.round_icon.chat_icon').click(function () {
    $('.dropdown-menu, .dropdown-toggle, .navbar-expand-lg .navbar-collapse').removeClass('show'),
      $('.navbar-light .navbar-toggler').addClass('collapsed');
  }),
  $(document).ready(function () {
    $('.chat_box .person_chat .message_typer .btn-white').click(function () {
      $('.chat_box .person_chat .message_typer .upload_flex').toggleClass('active');
    });
  });
