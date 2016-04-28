var moment = require('moment');

module.exports = function() {
  return function(date) {
    var TIME_THRESHOLD = 18 * 60 * 60 * 1000;
    var DAY_THRESHOLD = 6 * 30 * 24 * 60 * 60 * 1000;

    var ago = Date.now() - date;

    if (ago < TIME_THRESHOLD) {
      return moment(date).format('h:mm a');
    } else if (ago < DAY_THRESHOLD) {
      return moment(date).format('MMM D');
    } else {
      return moment(date).format('M/D/YY');
    }
  };
}
