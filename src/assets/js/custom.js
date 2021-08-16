/*Megadropdown 1*/
$('#my-project, #my-group').removeAttr('href');
$('#my-project').click(function(){
  $('.navbar-light .navbar-nav .nav-link').removeClass('active');
  var menu = $(this).attr('id');
  $('#' + menu + '-menu').prepend('<span class="close-menu">X</span>');
  $('#my-project-menu, #my-group-menu').removeClass('active');
	$('#' + menu + '-menu, #' + menu).addClass('active');
	event.stopPropagation();
  closeMenu();
});
$('#my-project-menu').click(function(){
	event.stopPropagation();
});
$('html').click(function(){
	$('#my-project-menu, #my-project').removeClass('active');
});



/*Megadropdown 2*/
$('#my-group').click(function(){
  $('.navbar-light .navbar-nav .nav-link').removeClass('active');
  var menu = $(this).attr('id');
  $('#' + menu + '-menu').prepend('<span class="close-menu">X</span>');
  $('#my-project-menu, #my-group-menu').removeClass('active');
  $('#' + menu + '-menu, #' + menu).addClass('active');
  event.stopPropagation();
  closeMenu();
});
$('#my-group-menu').click(function(){
	event.stopPropagation();
});
$('html').click(function(){
	$('#my-group-menu, #my-group').removeClass('active');
});


//close menu function
function closeMenu(){
$('.close-menu').click(function(){
  $(this).parent().removeClass('active');
  $('.navbar-light .navbar-nav .nav-link').removeClass('active')
});

};



/*chat user Slider*/
$('.chat_user_slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1
});



/*Modal Steps plugin*/
$('.modal_steps .steps-btn').click(function(){

  var indexClass = $(this).attr('indexClass');
  var indexnocount = parseInt($(this).attr('indexno'));
  var indexno = indexnocount + 1;

  if (indexno == $('.' + indexClass).length + 1) {
    return false;
  };

  $('.' + indexClass).removeClass('active');
  $(('.' + indexClass) + indexno).addClass('active');

});

$('.modal_steps .cancel_link').click(function(){
  var className = $('.modal_steps .steps-btn').attr('indexClass');
  $('.' + className).removeClass('active');
  $('.' + className + '1').addClass('active')
});






/*search form input dropdown when focus*/
$('.form_with_searchDrop').find('.search_dropdown').css('display', 'none');

$('.form_with_searchDrop .search_dropdown--btn').click(function(e){
  event.stopPropagation();
  $('.form_with_searchDrop').find('.search_dropdown').css('display', 'block');
});

$('.search_dropdown').click(function(e){
  event.stopPropagation();
  $('.form_with_searchDrop').find('.search_dropdown').css('display', 'block');
});

$('html').click(function(){
  $('.form_with_searchDrop').find('.search_dropdown').css('display', 'none');
});



/*Chat_Box*/
$(document).ready(function(){
  $('.chat_icon').click(function(){
    $('.notificate').removeClass('show').removeAttr('data-bs-popper');
    $('.bell_icon, .dropdown-menu, .dropdown-toggle').removeClass('show');
    $('.chat_box').addClass('active');
    event.stopPropagation();
    return false;
  });
  $('.chat_box').click(function(){
    event.stopPropagation();
  });
  $('html').click(function(){
    $('.chat_box, .chat_box .person_chat, .chat_box .person_chat .message_typer .upload_flex').removeClass('active');
  });
  $('.chat_box .msg_flex').click(function(){
    $('.chat_box .person_chat').addClass('active');
  });
  $('.chat_box .person_chat .back_icon').click(function(){
    $('.chat_box .person_chat').removeClass('active');
    return false;
  });
})




/* Management Tabs Plugin */
$(document).ready(function(){
  $('.create_section .create_steps .step_flex').click(function(){
    var index = $(this).index() + 1;
    $('.create_wrap .inner_wrap, .create_section .create_steps .step_flex').removeClass('active');
    $('.create_wrap .inner_wrap:nth-child(' + index + ')').addClass('active');
    $(this).addClass('active');
  });
});



//Toggle function for menu dropdonws in mobile
$('.navbar-light .navbar-nav .nav-link.dropdown-toggle').click(function(){
  if (!($(this).next().hasClass('cross-add'))) {
    $(this).next().addClass('cross-add');
    $(this).next().prepend('<span class="close-menu-toggle">X</span>');
  };
  clickToggleMenu();
});


//add class in chat icon and bell icon for mobile
$('.chat_icon').parent().addClass('item-50 item1-50');
$('.bell_icon').parent().addClass('item-50 item2-50');
$('.nav-item.item2-50').next().addClass('last-child');
$('.bell_icon').parent().parent().addClass('flex-dir');


//make dropdown stable when click on it 
$('.navbar-light .navbar-nav .dropdown .dropdown-menu.notificate').click(function(){
  event.stopPropagation();
});


//mobile dropdowns cross click function
function clickToggleMenu(){
$('.close-menu-toggle').click(function(){
  $('.dropdown-menu, .dropdown-toggle, .navbar-expand-lg .navbar-collapse').removeClass('show');
  $('.navbar-light .navbar-toggler').addClass('collapsed');
  $(this).parent().removeClass('show');
  $(this).parent().prev().removeClass('show');
});

}


//chat box show in mobile
$('.navbar-light .navbar-nav .nav-link.round_icon.chat_icon').click(function(){
  $('.dropdown-menu, .dropdown-toggle, .navbar-expand-lg .navbar-collapse').removeClass('show');
  $('.navbar-light .navbar-toggler').addClass('collapsed');
});





/* Chat Box Uploading Options */
$(document).ready(function(){
  $('.chat_box .person_chat .message_typer .btn-white').click(function(){
    $('.chat_box .person_chat .message_typer .upload_flex').toggleClass('active');
  });
});