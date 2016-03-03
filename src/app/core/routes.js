// @ngInject
module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      url: '/',
      template: '<dm-layout></dm-layout>',
    })
    .state('root.inbox', {
      url: 'inbox',
      views: {
        header: {template: '<dm-header></dm-header>'},
        '': {template: 'A clean inbox; some people never see this!'},
      }
    });

  $urlRouterProvider
    .otherwise('/inbox');
}

