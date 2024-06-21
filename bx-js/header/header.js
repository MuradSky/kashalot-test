"use strict";

$(function () {
  var $body = $('body');
  var $header = $('.js-header');
  var $headerBurger = $(".js-header-burger");
  var $headerMenu = $(".js-header-menu");
  $headerBurger.on("click", function () {
    if ($(this).hasClass("is-change")) {
      $body.removeAttr("style");
    } else {
      $body.css("overflow", "hidden");
    }

    $(this).toggleClass("is-change");
    $headerMenu.toggleClass("is-show");
    $header.toggleClass("is-show");
  });
  $headerMenu.on("click", function (e) {
    if (!!e.target.closest("a")) {
      setTimeout(function () {
        $headerBurger.removeClass("is-change");
        $headerMenu.removeClass("is-show");
      }, 500);
      $body.removeAttr("style");
    }
  });
});