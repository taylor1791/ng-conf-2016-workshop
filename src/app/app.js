var angular = require('angular');

var DINO_MAIL = 'dino.mail'

require('normalize.css/normalize.css');
require('qtip2/dist/jquery.qtip.css');
require('./style.css');

require('qtip2');

angular.module(DINO_MAIL, [
    require('angular-ui-router'),
    require('./misc/route-stabilization.js'),
    require('./indexes/routes.js'),
    require('./indexes/directives.js'),
    require('./indexes/services.js'),
    require('./indexes/filters.js'),
    appConfig
  ])
  .run(slowdownLoop);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('app'), [DINO_MAIL], {strictDi: true});
});

// @ngInject
function appConfig($httpProvider) {
  $httpProvider.useApplyAsync(true);
}

// @ngInject
function slowdownLoop($rootScope) {
  $rootScope.$watch(function() {
    for(var i = 0; i < 175000000; i++) {}
  }, angular.noop);
}

module.exports = DINO_MAIL;

