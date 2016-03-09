require('./style.css');

// @ngInject
module.exports = function() {
  return {
    restrict: 'E',
    scope: {},
    template: require('./template.html'),
    controller: require('./controller.js'),
    controllerAs: 'labelList',
  };
}

