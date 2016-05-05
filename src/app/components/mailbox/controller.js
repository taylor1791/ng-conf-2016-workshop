// @ngInject
module.exports = function($scope, $stateParams, dmEmailState, dmAPI, $interval) {
  var vm = this;

  vm.emails = [];
  vm.label = 'inbox';
  vm.emailFilter = dmEmailState.filter;

  vm.fetchEmails = function(label) {
    vm.label = label || 'inbox';

    var request = vm.label === 'inbox' ? dmAPI.getInbox : dmAPI.getLabel;

    request(vm.label).then(function(email) {
      dmEmailState.setLabel(label);
      dmEmailState.setMail(email.data);

      vm.email = dmEmailState.mail;
    });
  };

  vm.showTrashMessage = function() {
    return vm.label === 'trash';
  };

  vm.showStarredMessage = function() {
    return vm.label === 'starred';
  };

  vm.showOtherMessage = function() {
    return !vm.showTrashMessage() && !vm.showStarredMessage();
  };

  $scope.$watch(
    function() { return $stateParams.label; },
    vm.fetchEmails
  );

  $interval(function() {
    vm.fetchEmails($stateParams.label);
  }, 6000);

  $scope.$on('RefreshEmail', function() {
    vm.fetchEmails($stateParams.label);
  });
};

