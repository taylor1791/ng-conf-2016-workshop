// @ngInject
module.exports = function($element, $scope) {
  var vm = this;
  var btn = $element.find('button');

  $scope.$watch(
    function() { return vm.kind;},
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
