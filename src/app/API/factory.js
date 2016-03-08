// @ngInject
module.exports= function($http) {
  return {
    getUser: function() {
      return $http.get('/api/me');
    },

    getInbox: function() {
      return $http.get('/api/thread-list?labels=INBOX')
    },
  }
};

