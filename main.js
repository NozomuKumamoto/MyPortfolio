$('#burger').on('click', () => {
  $('.burger').toggleClass('show');
  $('.burger_nav').toggleClass('show');
});

$(window).on('load', () => {
  $('body').addClass('appear');
});