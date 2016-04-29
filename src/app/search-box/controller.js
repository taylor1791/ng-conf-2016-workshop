// @ngInject
module.exports = function(EmailState) {
  var vm = this;

  vm.filterText = "";

  vm.applyFilter = function() {
    EmailState.filter.snippet = vm.filterText;
  };
};
