// @ngInject
module.exports = function(User) {
  var vm = this;

  vm.avatarSource = User.profilePicture;
  vm.displayName = User.displayName;
};

