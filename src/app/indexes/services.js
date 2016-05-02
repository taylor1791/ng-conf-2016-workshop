// @ngInject
module.exports = function($provide) {
  $provide.factory('TimerUtils', require('../services/timer-utils.js'));
  $provide.factory('API', require('../services/API.js'));
  $provide.service('EmailState', require('../services/email-state.js'));

  $provide.constant('$', require('jquery'));
};

