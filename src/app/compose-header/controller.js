// @ngInject
module.exports = function ComposeHeaderCtrl($scope) {
  var vm = this;

  vm.restoreDefaultTemplate = function() {
    $scope.$emit('RestoreDefaultTemplate');
  };
};
