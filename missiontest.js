$(document).ready(function() {
    $("#slideshow3 > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow3 > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshow3');
      },  3000);

      $("#slideshow4 > div:gt(0)").hide();

      setInterval(function() { 
        $('#slideshow4 > div:first')
          .fadeOut(2000)
          .next()
          .fadeIn(2000)
          .end()
          .appendTo('#slideshow4');
        },  3000);
    
});
