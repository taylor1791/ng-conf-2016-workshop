require('./style.css');

module.exports = function dmCompose() {
  return {
    restrict: 'E',
    scope: {},
    template: require('./template.html'),
    controller: require('./controller.js'),
    controllerAs: 'compose',
    bindToController: true,
  };
};
