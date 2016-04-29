// @ngInject
module.exports = function(EmailState) {
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
    EmailState.filter.snippet = vm.filterText;
  };

  vm.applyAdvancedFilter = function() {
    EmailState.filter.snippet = vm.filterBody;
    EmailState.filter.headers.subject = vm.filterSubject;
    EmailState.filter.headers.from.name = vm.filterFrom;
  };
};
