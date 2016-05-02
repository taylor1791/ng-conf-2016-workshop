require('./style.css');

// @ngInject
module.exports = function dmComposeHeader() {
  return {
    restrict: 'E',
    scope: {},
    template: require('./template.html'),
    controller: require('./controller.js'),
    controllerAs: 'composeHeader',
    bindToController: true
  };
}


