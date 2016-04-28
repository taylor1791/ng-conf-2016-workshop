// @ngInject
module.exports = function($provide) {
  $provide.factory('API', require('../API/factory.js'));
  $provide.service('EmailState', require('../email-state/service.js'));
  $provide.constant('$', require('jquery'));
};

