// @ngInject
module.exports = function MailboxHeaderCtrl($rootScope, EmailState) {
  var vm = this;

  vm.selectedEmail = function() {
    return EmailState.emailSelected();
  };

  vm.selectAll = function() {
    $rootScope.$broadcast('SelectEmail');
  };
};
