// @ngInject
module.exports = function(dmEmailState) {
  var vm = this;

  vm.showAdvanced  = false;
  vm.filterText    = "";
  vm.filterSubject = "";
  vm.filterFrom    = "";
  vm.filterBody    = "";

  vm.toggleAdvanced = function() {
    vm.showAdvanced = !vm.showAdvanced;
  };

  vm.applyFilter = function() {
    dmEmailState.filter.snippet = vm.filterText;
  };

  vm.applyAdvancedFilter = function() {
    dmEmailState.filter.snippet = vm.filterBody;
    dmEmailState.filter.headers.subject = vm.filterSubject;
    dmEmailState.filter.headers.from.name = vm.filterFrom;
  };
};
