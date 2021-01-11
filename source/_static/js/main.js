$(document).ready(function () {
  // open external links in separate tab
  $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
  // toggle hidable sections
  $(".toggle > *").hide();
  $(".toggle .admonition-title").show();
  $(".toggle .admonition-title").click(function() {
      $(this).parent().children().not(".admonition-title").toggle(400);
      $(this).parent().children(".admonition-title").toggleClass("open");
  })
});
$(window).on('load', function () {
  console.log("loaded")

  $('a').click(function () {
    console.log('tag clicked')
    $("body.scrolled").addClass("set-padding")
    })
})
