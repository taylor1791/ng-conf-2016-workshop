// @ngInject
module.exports = function($filterProvider) {
  $filterProvider.register('dmDate', require('../filters/date.js'));
};

