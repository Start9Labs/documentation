$(document).ready(function () {
  // open external links in separate tab
  $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
  $(".fa-arrow-left").attr("class", "fas fa-times");
  $(".fa-arrow-up").attr("class", "fas fa-times");
  // toggle hidable sections
  $(".toggle > *").hide();
  $(".toggle .admonition-title").show();
  $(".toggle .admonition-title").click(function() {
      $(this).parent().children().not(".admonition-title").toggle(400);
      $(this).parent().children(".admonition-title").toggleClass("open");
  })
  // default menu to open on initial load
  $('.site-navigation').removeClass('collapsing');
  $('.site-navigation').removeClass('collapse');
  $('.site-navigation').addClass('show');
  // initially hide menu close button
  $('.fa-times').addClass('hidden');
  $('#navbar-toggler').click(function() {
    // toggle menu open/close button depending on collapsed state
    if ($('#navbar-toggler').hasClass("collapsed")) {
      $('.fa-times').removeClass('hidden');
    } else {
      $('.fa-times').addClass('hidden');
    }
  });
});
