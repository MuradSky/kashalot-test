"use strict";

$(function () {
  var $select = $('.js-select');
  if (!$select.length) return;
  $select.each(function (_, select) {
    var $that = $(select);

    var _$that$data = $that.data(),
        placeholder = _$that$data.placeholder,
        type = _$that$data.type,
        label = _$that$data.label;

    $that.select2({
      dropdownAutoWidth: true,
      placeholder: placeholder,
      width: null,
      dropdownCssClass: type === 'horizontal' ? 'dd-horizontal' : type === 'vertical' ? 'dd-vertical' : ''
    });

    var getDdList = function getDdList() {
      var ddSelector = type === 'horizontal' ? '.select2-dropdown.dd-horizontal' : type === 'vertical' ? '.select2-dropdown.dd-vertical' : '';
      var ddList = $(ddSelector);
      ddList.find('.js-select2-dropdown-label').remove();
      return ddList;
    };

    $that.on('select2:open', function () {
      var ddList = getDdList();

      if (ddList.length) {
        ddList.find('.select2-results').before($("<div class=\"js-select2-dropdown-label select2-dropdown-label\">".concat(label, "</div>")));
      }
    });
  });
});