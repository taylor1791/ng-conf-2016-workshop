// @ngInject
module.exports = function($timeout) {
  return {
    debounce: function(f, delay, invokeApply) {
      var timer;
      return function debounced() {
        var
          context = this,
          args = arguments;

        if(timer) {
          $timeout.cancel(timer);
        }

        timer = $timeout(function() {
          timer = null;
          f.apply(context, args);
        }, delay, invokeApply);
      };
    }
  };
};

