// @ngInject
module.exports = function($compileProvider) {
  $compileProvider.directive('dmLayout', require('../layout/directive.js'));
  $compileProvider.directive('dmHeader', require('../header/directive.js'));
  $compileProvider.directive('dmSearchBox', require('../search-box/directive.js'));
};

