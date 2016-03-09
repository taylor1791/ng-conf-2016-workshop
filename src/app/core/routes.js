// @ngInject
module.exports = function($stateProvider, $urlRouterProvider, $provide) {
  $stateProvider
    .state('root', {
      abstract: true,
      url: '',
      template: '<dm-layout></dm-layout>',
    })

    .state('root.mail', {
      abstract: true,
      url: '',
      views: {
        header: {template: '<dm-header></dm-header>'},
        '': {template: '<dm-mailbox-layout></dm-mailbox-layout>'},
      },
      resolve: {
        'User': resolveUser,
      },
    })

    .state('root.mail.inbox', {
      url: '/inbox/:label?',
      views: {
        pageHeader: {template: '<dm-mailbox-header></dm-mailbox-heder>'},
        '': {template: '<dm-mailbox></dm-mailbox>'},
      },
      params: {
        label: { value: 'inbox', squash: '' },
      },
    });

  $urlRouterProvider
    .otherwise('/inbox/');

  // @ngInject
  function resolveUser(API) {
    return API.getUser().then(function(user) {
      $provide.value('User', user.data);

      return user.data;
    });
  }
}

