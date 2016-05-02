require('./style.css');

// @ngInject
module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      mail: '=',
    },
    template: require('./template.html'),
    controller: require('./controller.js'),
    bindToController: true,
    controllerAs: 'mailItem',
  };
}

