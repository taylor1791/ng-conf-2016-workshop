// @ngInject
module.exports = function($provide) {
  $provide.factory('API', require('../API/factory.js'));
};
