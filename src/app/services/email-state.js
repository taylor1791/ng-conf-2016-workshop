module.exports = EmailState;

// @ngInject
function EmailState($rootScope) {
  this.$rootScope = $rootScope;
  this.label = 'INBOX';
  this.mail = [];
  this.filter = {headers: {subject: '', from: {name: ''}}, snippet: ''};
  this.history = {};
};

EmailState.prototype.setMail = function(mailList) {
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

EmailState.prototype.setLabel = function(label) {
  var prevLabel = this.currentLabel;
  this.currentLabel = label;

  this.$rootScope.$broadcast('EmailLabelSet', {
    label: label,
    previousLabel: prevLabel,
  });
};

EmailState.prototype.emailSelected = function() {
  return this.mail.reduce(function(acc, mail) {
    return acc + (+(mail.selected || false));
  }, 0);
};

