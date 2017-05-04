//issues with Chrome;
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function(){

  if (document.documentElement.clientWidth > 667 && document.documentElement.clientWidth < 960) {
    $($('.slide')[0]).addClass("done");
    $($('.slide')[0]).animate({'width':'80%'},1000);
  } else if (document.documentElement.clientWidth > 667) {
    $($('.slide')[0]).addClass("done");
    $($('.slide')[0]).animate({'width':'60%'},1000);
  }

  $(window).scroll( function(){
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    $('.slide').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      if( bottom_of_window > bottom_of_object && !$(this).hasClass("done")){
        if (document.documentElement.clientWidth > 667 && document.documentElement.clientWidth < 960) {
          $(this).addClass("done");
          $(this).animate({'width':'80%'},1000);
        } else if (document.documentElement.clientWidth > 667) {
          $(this).addClass("done");
          $(this).animate({'width':'60%'},1000);
        }
      }
    });
  });

  var menuButtons = $('.button');

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var slideOne = $('#slide-1').scrollTop();

      if (scroll >= $('#slide-1').offset().top-100 && scroll < $('#slide-2').offset().top-100 ) {
        $(".button").removeClass("active");
        $($(".button")[0]).addClass("active");
      }
      else if (scroll >= $('#slide-2').offset().top-100 && scroll < $('#slide-3').offset().top-100 ) {
        $(".button").removeClass("active");
        $($(".button")[1]).addClass("active");
      }
      else if (scroll >= $('#slide-3').offset().top-100 && scroll < $('#slide-4').offset().top-100 ) {
        $(".button").removeClass("active");
        $($(".button")[2]).addClass("active");
      }
      else if (scroll >= $('#slide-4').offset().top-100 && scroll < $('#slide-5').offset().top-100 ) {
        $(".button").removeClass("active");
        $($(".button")[3]).addClass("active");
      }
      else if (scroll >= $('#slide-5').offset().top-100) {
        $(".button").removeClass("active");
        $($(".button")[4]).addClass("active");
      }
  });

  $(document).on('click', 'a', function(event){
    if(this.getAttribute("href").charAt(0) === "#") {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
    }
  });

});
