$("#myCarousel").on("touchstart", function(event){
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function(event){
    var xMove = event.originalEvent.touches[0].pageX;
    if( Math.floor(xClick - xMove) > 5 ){
      $("#myCarousel").carousel('next');
    }
    else if( Math.floor(xClick - xMove) < -5 ){
      $("#myCarousel").carousel('prev');
    }
  });
  $("#myCarousel").on("touchend", function(){
    $(this).off("touchmove");
  });
});
