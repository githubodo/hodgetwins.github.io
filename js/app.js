'use strict';

(function($) {
  //preloader
  $(".preloader").delay(300).animate({
    "opacity" : "0"
    }, 300, function() {
    $(".preloader").css("display","none");
  });

  // Animate the scroll to top
  $(".scroll-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 300);
  });
})(jQuery);