// @ngInject
module.exports = function MailboxHeaderCtrl($rootScope, dmEmailState) {
  var vm = this;

  vm.selectedEmail = function() {
    return dmEmailState.emailSelected();
  };

  vm.allMailSelected = function() {
    return dmEmailState.emailSelected() === dmEmailState.mail.length;
  };

  vm.selectAll = function() {
    $rootScope.$broadcast('SelectEmail', true);
  };

  vm.selectNone = function() {
    $rootScope.$broadcast('SelectEmail', false);
  };

  vm.refresh = function() {
    $rootScope.$broadcast('RefreshEmail');
  };
};
