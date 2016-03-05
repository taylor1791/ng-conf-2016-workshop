// @ngInject
module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      url: '',
      template: '<dm-layout></dm-layout>',
    })
    .state('root.mailbox', {
      url: '/mailbox',
      views: {
        header: {template: '<dm-header></dm-header>'},
      }
    });

  $urlRouterProvider
    .otherwise('/mailbox');
}

