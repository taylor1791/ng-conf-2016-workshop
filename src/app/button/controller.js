// @ngInject
module.exports = function($scope, $element, $) {
  var vm = this;
  var btn = $element.find('button');

  $(btn).qtip(createTooltipOptions(vm.tooltip));

  $scope.$watch(
    function() { return vm.kind; },
    function(newKind, oldKind) {
      var PREFIX = 'dmButton_';
      if (newKind !== oldKind) {
        btn.removeClass(PREFIX + oldKind);
      }

      if (newKind) {
        btn.addClass(PREFIX + newKind);
      }
    }
  );
};

function createTooltipOptions(text) {
  return {
    content: {
      text: text,
    },
    position: {
      my: 'top center',
      at: 'bottom center',
    },
    show: {
      event: 'mouseover',
    }
  };
}
