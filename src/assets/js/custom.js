/*Megadropdown 1*/
$('#my-project, #my-group').removeAttr('href');
$('#my-project').click(function(){
  $('.mega_dropdown, #my-project, #my-group').removeClass('active');
	$('#my-project-menu, #my-project').addClass('active');
	event.stopPropagation();
});
$('#my-project-menu').click(function(){
	event.stopPropagation();
});
$('html').click(function(){
	$('#my-project-menu, #my-project').removeClass('active');
});



/*Megadropdown 2*/
$('#my-group').click(function(){
  $('.mega_dropdown, #my-project, #my-group').removeClass('active');
	$('#my-group-menu, #my-group').addClass('active');
	event.stopPropagation();
});
$('#my-group-menu').click(function(){
	event.stopPropagation();
});
$('html').click(function(){
	$('#my-group-menu, #my-group').removeClass('active');
});



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



/* Chat Box Uploading Options */
$(document).ready(function(){
  $('.chat_box .person_chat .message_typer .btn-white').click(function(){
    $('.chat_box .person_chat .message_typer .upload_flex').toggleClass('active');
  });
});