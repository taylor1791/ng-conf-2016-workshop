// @ngInject
module.exports= function($http) {
  return {
    getUser: function() {
      return $http.get('/api/me');
    },
  }
};

