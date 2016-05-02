// @ngInject
module.exports = function($compileProvider) {
  $compileProvider.directive('dmLayout', require('../components/layout/directive.js'));
  $compileProvider.directive('dmHeader', require('../components/header/directive.js'));
  $compileProvider.directive('dmSearchBox', require('../components/search-box/directive.js'));
  $compileProvider.directive('dmSmallAvatar', require('../components/small-avatar/directive.js'));
  $compileProvider.directive('dmMailboxLayout', require('../components/mailbox-layout/directive.js'));
  $compileProvider.directive('dmMailboxHeader', require('../components/mailbox-header/directive.js'));
  $compileProvider.directive('dmButton', require('../components/button/directive.js'));
  $compileProvider.directive('dmMailbox', require('../components/mailbox/directive.js'));
  $compileProvider.directive('dmLabelList', require('../components/label-list/directive.js'));
  $compileProvider.directive('dmMailItem', require('../components/mail-item/directive.js'));
  $compileProvider.directive('dmCompose', require('../components/compose/directive.js'));
  $compileProvider.directive('dmComposeHeader', require('../components/compose-header/directive.js'));

  $compileProvider.directive('dmEnter', require('../directives/enter/directive.js'));
};

