// @ngInject
module.exports = function($scope, $stateParams, EmailState, API, $interval) {
  var vm = this;

  vm.emails = [];
  vm.label = 'inbox';
  vm.emailFilter = EmailState.filter;

  vm.fetchEmails = function(label) {
    vm.label = label || 'inbox';

    var request = vm.label === 'inbox' ? API.getInbox : API.getLabel;

    request(vm.label).then(function(email) {
      vm.email = email.data;

      EmailState.setLabel(label);
      EmailState.setMail(vm.email);
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
  }, 5000);
};

