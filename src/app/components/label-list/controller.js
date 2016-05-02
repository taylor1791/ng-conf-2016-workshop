// @ngInject
module.exports = function($stateParams, $rootScope, API) {
  var vm = this;

  vm.showBottom = false;
  vm.top = [];
  vm.bottom = [];

  API.getLabels().then(setLabels);
  setLabel();

  vm.showUnread = function(label) {
    return label.estimatedUnread > 0 &&
      !~['ALL MAIL', 'TRASH', 'SENT MAIL'].indexOf(label.label.toUpperCase());
  };

  vm.toggleBottom = function() {
    vm.showBottom = !vm.showBottom;
  };

  $rootScope.$on('$stateChangeSuccess', setLabel);

  function setLabel() {
    vm.activeLabel = $stateParams.label || 'inbox';
  }

  function setLabels(labels) {
    vm.top = labels.high;
    vm.bottom = labels.low;
  }
};

