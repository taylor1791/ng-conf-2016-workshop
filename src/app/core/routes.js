// @ngInject
module.exports = function($stateProvider, $urlRouterProvider, $provide) {
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
      },
      resolve: {
        // @ngInject
        'User': function(API) {
          return API.getUser().then(function(user) {
            $provide.value('User', user.data);

            return user.data;
          });
        }
      },
    })
    .state('root.mailbox.inbox', {
      url: '/inbox/:label?',
      views: {
        pageHeader: {template: '<dm-mailbox-header></dm-mailbox-heder>'},
        '': {template: '<dm-mailbox></dm-mailbox>'},
      }
    });

  $urlRouterProvider
    .otherwise('/mailbox/inbox/');
}

