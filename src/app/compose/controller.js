var marked = require('marked');

var markedOptions = {sanitize: true};

// @ngInject
module.exports = function ComposeCtrl($element, $rootScope, $compile, User) {
  var vm = this;
  var previewPane = $element.find('preview-mail-column');
  var previewScope = $rootScope.$new();

  vm.body = '';

  vm.updatePreview = function() {
    previewScope.user = User;
    previewPane.empty();
    previewPane.append($compile(marked(vm.body || 'Email Preview', markedOptions))(previewScope));
  };

  vm.updatePreview();

  $rootScope.$on('RestoreDefaultTemplate', _applyDefaultTemplate);

  function _applyDefaultTemplate() {
    vm.body = 'Hello ,\n\n\\- {{user.displayName}} -\n\n---\n{{user.signature}}';
  }
};

