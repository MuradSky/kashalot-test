"use strict";

$(function () {
  var $serviceItem = $('.js-service-item');
  $serviceItem.on('mouseenter', function () {
    var that = $(this);
    var text = that.find('[data-text]');
    text.css('max-height', text[0].scrollHeight);
  }).on('mouseleave', function () {
    var that = $(this);
    that.find('[data-text]').css('max-height', 0);
  });
});