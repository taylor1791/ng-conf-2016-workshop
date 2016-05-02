var marked = require('marked');

var markedOptions = {sanitize: true};

// @ngInject
module.exports = function ComposeCtrl($element, $rootScope, $compile, User, dmTimerUtils) {
  var vm = this;
  var previewPane = $element.find('preview-mail-column');
  var previewScope = $rootScope.$new();

  vm.body = '';

  vm.renderPreview = function() {
    previewScope.user = User;
    var rendered = $compile(marked(vm.body || 'Email Preview', markedOptions))(previewScope);
    previewPane.empty();
    previewPane.append(rendered);
  };

  vm.updatePreview = dmTimerUtils.debounce(vm.renderPreview, 25, false);

  vm.renderPreview();

  $rootScope.$on('RestoreDefaultTemplate', _applyDefaultTemplate);

  function _applyDefaultTemplate() {
    vm.body = 'Hello ,\n\n\\- {{user.displayName}} -\n\n---\n{{user.signature}}';
  }
};

