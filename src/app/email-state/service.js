module.exports = EmailState;

// @ngInject
function EmailState($rootScope) {
  this.$rootScope = $rootScope;
  this.label = 'INBOX';
};

EmailState.prototype.setLabel = function(label) {
  var prevLabel = this.currentLabel;
  this.currentLabel = label;

  this.$rootScope.$broadcast('EmailLabelSet', {
    label: label,
    previousLabel: prevLabel,
  });
};

