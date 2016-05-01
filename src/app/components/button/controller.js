// @ngInject
module.exports = function($scope, $element, $) {
  var vm = this;
  var btn = $element.find('button');

  $element.addClass(vm.class);

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

  $scope.$on('$destroy', function() {
    $(btn).qtip('destroy', true);
  });
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
