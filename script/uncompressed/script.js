$(document).ready(function() {

  <!-- closes nav bar -->
  $(function () { $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
      $('.navbar-toggle:visible').click(); 
      }); 
  });

  <!-- changes navbar color when scrolling -->
  $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
          if ($(document).scrollTop() > 200) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar").css({"background-color": "#112156", "opacity":"0.95"}); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
          } else {
            $(".navbar").css({"background-color": "black", "opacity":"0.9"}); // if not, change it back to transparent
          }
      });
  });

  var links = $('.nav').find('li');
  <!-- animated scrolling -->
  $(links).not('.ext_link').on('click', 'a', function(event){
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href') ).offset().top-50
      }, 400);<!-- seconds -->
  });


  $(function() {
      $('.coverflow').coverflow();
  });

  $(document).ready(function () {
      // None of the options are set
      $("#makeMeScrollable").smoothDivScroll({
          manualContinuousScrolling: true,
          autoScrollingMode: "onStart"
      });
  });


});