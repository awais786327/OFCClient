/*Megadropdown 1*/
$('#my-project').click(function(){
	$('#my-project-menu').addClass('active');
	event.stopPropagation();
});
$('#my-project-menu').click(function(){
	event.stopPropagation();
});
$('html').click(function(){
	$('#my-project-menu').removeClass('active');
});



/*Megadropdown 2*/
$('#my-group').click(function(){
	$('#my-group-menu').addClass('active');
	event.stopPropagation();
});
$('#my-group-menu').click(function(){
	event.stopPropagation();
});
$('html').click(function(){
	$('#my-group-menu').removeClass('active');
});




/*Filter Range Slider*/
var $range = $(".js-range-slider"),
  $from = $(".from"),
  $to = $(".to"),
  range,
  min = $range.data("min"),
  max = $range.data("max"),
  from,
  to;

var updateValues = function () {
  $from.prop("value", from);
  $to.prop("value", to);
};

$range.ionRangeSlider({
  onChange: function (data) {
    from = data.from;
    to = data.to;
    updateValues();
  }
});

range = $range.data("ionRangeSlider");
var updateRange = function () {
  range.update({
    from: from,
    to: to
  });
};

$from.on("input", function () {
  from = +$(this).prop("value");
  if (from < min) {
    from = min;
  }
  if (from > to) {
    from = to;
  }
  updateValues();
  updateRange();
});

$to.on("input", function () {
  to = +$(this).prop("value");
  if (to > max) {
    to = max;
  }
  if (to < from) {
    to = from;
  }
  updateValues();
  updateRange();
});
