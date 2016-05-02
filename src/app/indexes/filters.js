// @ngInject
module.exports = function($filterProvider) {
  $filterProvider.register('dmDate', require('../services/date-filter.js'));
};

