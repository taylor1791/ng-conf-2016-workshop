// @ngInject
module.exports = function($document, $scope) {
  var vm = this;
  $document.on('keypress', _execExpr);

  function _execExpr(e) {
    if (e.keyCode === 13) {
      $scope.$apply(function() {
        vm.dmEnter();
      });
    }
  }
};

