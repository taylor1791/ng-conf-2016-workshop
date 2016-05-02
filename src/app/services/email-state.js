module.exports = dmEmailState;

// @ngInject
function dmEmailState($rootScope) {
  this.$rootScope = $rootScope;
  this.label = 'INBOX';
  this.mail = [];
  this.filter = {headers: {subject: '', from: {name: ''}}, snippet: ''};
  this.history = {};
};

dmEmailState.prototype.setMail = function(mailList) {
  var prevMail = this.mail;
  this.mail = []

  mailList.forEach(function(mailItem) {
    if (!this.history[mailItem.id]) {
      this.history[mailItem.id] = mailItem;
    }

    this.mail.push(this.history[mailItem.id]);
  }, this);

  this.$rootScope.$broadcast('EmailSet', {
    mail: mailList,
    prevMail: prevMail
  });
};

dmEmailState.prototype.setLabel = function(label) {
  var prevLabel = this.currentLabel;
  this.currentLabel = label;

  this.$rootScope.$broadcast('EmailLabelSet', {
    label: label,
    previousLabel: prevLabel,
  });
};

dmEmailState.prototype.emailSelected = function() {
  return this.mail.reduce(function(acc, mail) {
    return acc + (+(mail.selected || false));
  }, 0);
};

