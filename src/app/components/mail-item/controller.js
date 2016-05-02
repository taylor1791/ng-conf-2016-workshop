// @ngInject
module.exports = function($scope, $timeout) {
  var vm = this;

  // I know that there are better ways to do this, but I need to show this pattern
  $scope.$on('SelectEmail', function() {
    //Pretend there is an animation there or something
    $timeout(function() {
      vm.mail.selected = true;
    });
  });
};

