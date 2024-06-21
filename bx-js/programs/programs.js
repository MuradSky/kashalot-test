"use strict";

$(function () {
  var $sliderPrograms = $(".js-programs-slider");
  var $sliderProgramsPrev = $(".js-programs-slider-prev");
  var $sliderProgramsNext = $(".js-programs-slider-next");
  if (!$sliderPrograms.length) return;
  $sliderPrograms.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1241,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }, {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });
  $sliderProgramsPrev.on('click', function () {
    return $sliderPrograms.slick('slickPrev');
  });
  $sliderProgramsNext.on('click', function () {
    return $sliderPrograms.slick('slickNext');
  });
});