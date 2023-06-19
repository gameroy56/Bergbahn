$(document).ready(function(){
  //kartenbreite responsiv
  function cardSize() {
    var screenWidth = $(window).width()
    var trackWidth = $(".carousel-slider").width();
    var cardWidth;
    if (screenWidth >= 771){
      cardWidth = trackWidth /4
    }
    else if (screenWidth <= 771 && screenWidth > 576){
      cardWidth = trackWidth /3;
    }
    else if (screenWidth <= 576){
      cardWidth = trackWidth /1.5
    }
    

    $(".karten.carousel-boxes").css("width", cardWidth + "px")
  }
  //standart bild verschiedene größen
  function updateImage() {
    var images = [
      "Logos/Bilder/main/view-groesser-gleich-1400px.png",
      "Logos/Bilder/main/view-groesser-gleich-1200px.png",
      "Logos/Bilder/main/view-groesser-gleich-992px.png",
      "Logos/Bilder/main/view-groesser-gleich-768px.png",
      "Logos/Bilder/main/view-576px.png",
    ]
    var screenWidth = $(window).width();
    var imageIndex = 0;

    if (screenWidth >= 1200){
      imageIndex = 0
    } else if (screenWidth >= 992){
      imageIndex = 1
    } else if (screenWidth >= 768){
      imageIndex = 2
    } else if (screenWidth >= 576){
      imageIndex = 3
    } else {
      imageIndex = 4
    }
    $("#standart").attr("src", images[imageIndex])

  }
  $(window).on("load resize", updateImage, cardSize);

  //Karuselle
  $('.karten.carousel-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    draggable: true,
    variableWidth: true,
    prevArrow: $(".karten #prev"),
    nextArrow: $(".karten #next"),
    responsive:[
      {
        breakpoint: 771,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('#bilder-carousel').slick({
    speed: 700,
    autoplay: false,
    autoplaySpeed: 7000,
    draggable: false,
    prevArrow: $("#graphic #prev"),
    nextArrow: $("#graphic #next")
  })

  //nav-info-popup
  $(document).click(function(e){
    var popup= $(e.target).next(".info-overlay").add($(e.target).children(".bottom-text-arrow"));
    var conductor = $(e.target).find(".bottom-text-hover-img");
    var both = popup.add(conductor)
    var conductor_background = $(e.target).children(".bottom-text-hover");
    if ($(e.target).hasClass("bottom-text")){
      if ($(window).width() >= 992 ){ 
          both.toggleClass("sichtbar_flex"); 
          conductor_background.toggleClass("bottom-text-hover-toggle")
          $("#background").addClass("sichtbar_flex");
          //scrolling 
          $("html, body").animate({
            scrollTop: 0
          }, 150);}

        else { 
          both.toggleClass("sichtbar_block");
          $(e.target).toggleClass("arrow-up")
          ;}
        }
      }); 
      
      //nav-info-popup schließen
      $("#background, .info-overlay-X").click(function(){
        var popup = $(".info-overlay, .bottom-text-arrow").add($(".bottom-text-hover-img"))
        var conductor_background = $(".bottom-text-hover")
        
        popup.removeClass("sichtbar_flex sichtbar_block")
        $("#background").removeClass("sichtbar_flex")
        conductor_background.removeClass("bottom-text-hover-toggle")
      });
      
      $("#burger").click(function() {
        $("#bottom-text-outer-box").toggleClass("sichtbar_block");
        if ($("#bottom-text-outer-box").hasClass("sichtbar_block")) {
          $("#burger").children().attr("src", "/Bergbahn/Logos/Icons/cross.svg");
          $("#burger").children().css("height", "70%")}
          else{
            $("#burger").children().attr("src", "/Bergbahn/Logos/Icons/burger-button.svg")
            $("#burger").children().css("height", "50%")
          }
      });

});
      
    