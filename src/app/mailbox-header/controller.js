// @ngInject
module.exports = function MailboxHeaderCtrl(EmailState) {
  var vm = this;

  vm.selectedEmail = function() {
    return EmailState.emailSelected();
  }
};
