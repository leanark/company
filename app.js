'use strict';

angular.module('myApp', [
  'ui.router',
  'myApp.navTopBarMod',
  'myApp.services',
  'myApp.directives',
  'myApp.filters',
  'myApp.animations',
  'myApp.home',
  'myApp.about',
  'myApp.treemap',
  'myApp.rosette',
  'myApp.crossfilter',
  'myApp.gallery'
])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

  // It's very handy to add references to $state and
  // $stateParams to the $rootScope
  // so that you can access them from any scope within your
  // applications.For example,
  // <li ng-class="{ active: $state.includes('contacts.list')
  // }"> will set the <li>
  // to active whenever 'contacts.list' or one of its
  // decendents is active.
	
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on("$stateChangeSuccess", function(){
    window.scrollTo(0,0);
    //document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}])

.value('ip', 'http://localhost:3000')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/"); 

}]);
