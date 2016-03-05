// @ngInject
module.exports = function($compileProvider) {
  $compileProvider.directive('dmLayout', require('../layout/directive.js'));
  $compileProvider.directive('dmHeader', require('../header/directive.js'));
  $compileProvider.directive('dmSearchBox', require('../search-box/directive.js'));
  $compileProvider.directive('dmSmallAvatar', require('../small-avatar/directive.js'));
  $compileProvider.directive('dmMailboxLayout', require('../mailbox-layout/directive.js'));
  $compileProvider.directive('dmMailboxHeader', require('../mailbox-header/directive.js'));
  $compileProvider.directive('dmButton', require('../button/directive.js'));
};

