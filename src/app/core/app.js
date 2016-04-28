var angular = require('angular');
var spars = require('./route-stabilization.js');

var DINO_MAIL = 'dino.mail'

require('normalize.css/normalize.css');
require('qtip2/dist/jquery.qtip.css');
require('./style.css');

require('qtip2');

angular.module(DINO_MAIL, [
    require('angular-ui-router'),
    require('./route-stabilization.js'),
    require('./routes.js'),
    require('./directives.js'),
    require('./services.js'),
  ]);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('app'), [DINO_MAIL], {strictDi: true});
});

module.exports = DINO_MAIL;

