var angular = require('angular');
var DINO_MAIL = 'dino.mail'

require('normalize.css/normalize.css');

angular.module(DINO_MAIL, [
    require('angular-ui-router'),
    require('./routes.js'),
    require('./directives.js'),
  ]);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('app'), [DINO_MAIL], {strictDi: true});
});

module.exports = DINO_MAIL;

