// @ngInject
module.exports = function($timeout) {
  var digestTimer;

  return {
    digest: function() {
      if (digestTimer) {
        $timeout.cancel(digestTimer);
      }

      // This looks like it does nothing, but it is a safe digest.
      digestTimer = $timeout(angular.noop, 25);
    }
  };
};

