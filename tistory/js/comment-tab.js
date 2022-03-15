$(function () {
  $('#github').removeClass('active');
});

$('.tab-button').on('click', function (e) {
  $('.tab-button').removeClass('active');
  $(this).addClass('active');

  $('.tab-content').removeClass('active');
  const target = $(this).data('id');
  $(`#${target}`).addClass('active');
});
