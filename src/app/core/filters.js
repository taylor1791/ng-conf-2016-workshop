// @ngInject
module.exports = function($filterProvider) {
  $filterProvider.register('dinoDate', require('../filters/dino-date.js'));
};

