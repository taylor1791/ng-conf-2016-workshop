// @ngInject
module.exports = function($provide) {
  $provide.factory('dmTimerUtils', require('../services/timer-utils.js'));
  $provide.factory('dmAPI', require('../services/API.js'));
  $provide.service('dmEmailState', require('../services/email-state.js'));

  $provide.constant('$', require('jquery'));
};

