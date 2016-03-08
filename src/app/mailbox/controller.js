// @ngInject
module.exports = function(API) {
  var vm = this;

  vm.emails = [];

  vm.init = function() {
    API.getInbox().then(function(x) {
      vm.email = x.data;
    });
  };

  vm.init();
};

