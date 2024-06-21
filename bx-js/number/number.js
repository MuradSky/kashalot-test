"use strict";

$(function () {
  var $sliderNumber = $(".js-number-slider");
  if (!$sliderNumber.length) return;
  $sliderNumber.each(function (_, slider) {
    var $slider = $(slider);
    var $nav = $slider.siblings('.number__nav');
    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $nav.find('.js-counter').text(i + '/' + slick.slideCount);
    });
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    });
    $nav.find('.js-number-slider-prev').on('click', function () {
      return $slider.slick('slickPrev');
    });
    $nav.find('.js-number-slider-next').on('click', function () {
      return $slider.slick('slickNext');
    });
  });
});