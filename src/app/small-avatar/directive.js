require('./style.css');

// @ngInject
module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      imgSrc: '@',
    },
    template: require('./template.html'),
    controller: require('./controller.js'),
    bindToController: true,
    controllerAs: 'avatar',
  };
}

