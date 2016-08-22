/*
 * Hamburger menu javascript
 */
$(".hamburger").click(function() {
  $(".hamburger").toggleClass("is-active");
  $("body").toggleClass("no-scroll menu-active");
  $(".main-nav ul").toggleClass("is-active");
});

// media query event handler
if (matchMedia) {
  
  var mq = window.matchMedia("(min-width: 700px)");

  mq.addListener(function() {
    if (mq.matches) {
      // window width is at least 700px
      $(".hamburger").removeClass("is-active");
      $("body").removeClass("no-scroll menu-active");
      $(".main-nav ul").removeClass("is-active");
    }
  });
}
