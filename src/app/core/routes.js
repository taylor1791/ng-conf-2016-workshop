// @ngInject
module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      url: '/',
      template: '<ui-view></ui-view>'
    })
    .state('root.inbox', {
      url: 'inbox',
      template: 'A clean inbox; some people never see this!'
    });

  $urlRouterProvider
    .otherwise('/inbox');
}

