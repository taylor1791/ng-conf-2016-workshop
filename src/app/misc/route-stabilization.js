var angular = require('angular');

var SPARS = 'taylor1791.spars';

module.exports = SPARS;

angular.module(SPARS, [])
  .run(['$rootScope', '$http', '$log', '$injector', '$timeout', '$document', function($rootScope, $http, $log, $injector, $timeout, $document) {
    var startRouteChange = null;
    var endRouteChange = null;
    var metric = null;
    var debounceToken = null;
    var unbind = angular.noop;
    var observer = window.MutationObserver && new MutationObserver(setupDebounce);
    var node = $document[0].documentElement;

    // Ignore browsers that do not support MutationEvents nor
    // Mutation Observers *Cough IE8*.
    if(!observer && !('MutationEvent' in window)) {
      $log.info('Route stabilization not supported on this browser');
      return;
    }

    // Support both ngRoute and uiRouter event schemes
    $rootScope.$on('$routeChangeStart', startTiming);
    $rootScope.$on('$stateChangeStart', startTiming);
    $rootScope.$on('$stateChangeSuccess', pageSuccess);
    $rootScope.$on('$routeChangeSuccess', pageSuccess);
    $rootScope.$on('$routeChangeError', cleanUp);
    $rootScope.$on('$stateChangeError', cleanUp);

    function startTiming() {
      startRouteChange = Date.now();
    }

    function pageSuccess(e, toState) {
      metric = toState.name || toState.url;
      setupMutationObservers();
      unbind = $rootScope.$watch(then(setupDebounce, pendingRequests));
    }

    function cleanUp() {
      unbind();
      observer && observer.disconnect();
      if(node) {
        node.removeEventListener('DOMNodeInserted', setupDebounce, true);
        node.removeEventListener('DOMNodeRemoved', setupDebounce, true);
        node.removeEventListener('DOMNodeInsertedIntoDocument', setupDebounce, true);
        node.removeEventListener('DOMNodeRemovedFromDocument', setupDebounce, true);
      }
      $timeout.cancel(debounceToken);
      startRouteChange = null;
      endRouteChange = null;
      metric = null;
      debounceToken = null;
      unbind = angular.noop;
    }

    function setupMutationObservers() {
      if(observer) {
        observer.observe(node, {childList: true, subtree: true});
      } else if("MutationEvent" in window && node) {
        node.addEventListener('DOMNodeInserted', setupDebounce, true);
        node.addEventListener('DOMNodeRemoved', setupDebounce, true);
        node.addEventListener('DOMNodeInsertedIntoDocument', setupDebounce, true);
        node.addEventListener('DOMNodeRemovedFromDocument', setupDebounce, true);
      }
    }

    function setupDebounce() {
      endRouteChange = Date.now();
      $timeout.cancel(debounceToken);
      debounceToken = $timeout(done, 75, false);
    }

    function done() {
      if (pendingRequests()) return setupDebounce();
      var duration = endRouteChange - startRouteChange;
      $log.info(metric, duration);
      cleanUp();
    }

    function pendingRequests() {
      return $http.pendingRequests.length;
    }

    function then(f, g) {
      f();
      return g();
    }
  }]);
