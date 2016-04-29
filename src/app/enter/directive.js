// @ngInject
module.exports = function() {
  return {
    restrict: 'A',
    scope: {
      dmEnter: '&'
    },
    controller: require('./controller.js'),
    controllerAs: 'enter',
    bindToController: true,
  };
};
