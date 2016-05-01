// @ngInject
module.exports = function($element, $scope) {
  var vm = this;
  $element.on('keypress', _execExpr);

  function _execExpr(e) {
    if (e.keyCode === 13) {
      $scope.$apply(function() {
        vm.dmEnter();
      });
    }
  }
};

