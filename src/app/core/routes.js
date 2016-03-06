// @ngInject
module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      url: '',
      template: '<dm-layout></dm-layout>',
    })
    .state('root.mailbox', {
      abstract: true,
      url: '/mailbox',
      views: {
        header: {template: '<dm-header></dm-header>'},
        '': {template: '<dm-mailbox-layout></dm-mailbox-layout>'},
      }
    })
    .state('root.mailbox.inbox', {
      url: '/inbox',
      views: {
        pageHeader: {template: '<dm-mailbox-header></dm-mailbox-heder>'},
        '': {template: '<dm-mailbox></dm-mailbox>'},
      }
    });

  $urlRouterProvider
    .otherwise('/mailbox/inbox');
}

