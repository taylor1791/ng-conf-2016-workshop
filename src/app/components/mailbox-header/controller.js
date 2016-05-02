// @ngInject
module.exports = function MailboxHeaderCtrl($rootScope, dmEmailState) {
  var vm = this;

  vm.selectedEmail = function() {
    return dmEmailState.emailSelected();
  };

  vm.selectAll = function() {
    $rootScope.$broadcast('SelectEmail');
  };

  vm.refresh = function() {
    $rootScope.$broadcast('RefreshEmail');
  };
};
