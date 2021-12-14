$(document).ready(function (e) {
  // open external links in separate tab
  $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');

  // toggle hidable sections
  $(".toggle > *").hide();
  $(".toggle .admonition-title").show();
  $(".toggle .admonition-title").click(function() {
      $(this).parent().children().not(".admonition-title").toggle(400);
      $(this).parent().children(".admonition-title").toggleClass("open");
  })

  // change appearance of arrow to X for menu closing
  $(".fa-arrow-left").attr("class", "fas fa-times");
  $(".fa-arrow-up").attr("class", "fas fa-times");

  // initially hide menu close button on small screen widths
  if ($(window).width() < 768) {
    $('.fa-times').addClass('hidden');
  }

  $('#navbar-toggler').click(function() {
    // toggle menu open/close button depending on collapsed state
    if ($('#navbar-toggler').hasClass("collapsed")) {
      $('.fa-times').removeClass('hidden');
    } else {
      $('.fa-times').addClass('hidden');
    }
  });
});
