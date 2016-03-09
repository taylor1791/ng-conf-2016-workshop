// @ngInject
module.exports= function($http) {
  return {
    getUser: function() {
      return $http.get('/api/me');
    },

    getLabels: function() {
      return $http.get('/api/labels').then(function(labels) {
        return {
          high: labels.data.filter(isHighPriority).sort(compareLabel),
          low: labels.data.filter(isLowPriority).sort(compareLabel),
        };
      });
    },

    getInbox: function() {
      return $http.get('/api/thread-list?labels=inbox')
    },
  }
};

var LABEL_PRIORITIES = {
  INBOX: 100,
  STARRED: 90,
  'SENT MAIL': 80,
  DRAFTS: 70,
  'ALL MAIL': 50,
  RECIEPIES: 40,
  SPAM: 30,
  TRASH: 20,
};

var DEFUALT_LABEL_PRIORITY = 35;
var HIGH_PRIORITY_THRESHOLD = 50;

function isHighPriority(label) {
  return getValue(label) > HIGH_PRIORITY_THRESHOLD;
}

function isLowPriority(label) {
  return !isHighPriority(label);
}

function getValue(label) {
  return LABEL_PRIORITIES[label.label.toUpperCase()] || DEFAULT_LABEL_PRIORITY;
}

function compareLabel(a, b) {
  return getValue(a) < getValue(b) ? 1 : -1;
}
