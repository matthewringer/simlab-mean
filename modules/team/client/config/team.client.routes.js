(function () {
  'use strict';

  angular
    .module('team.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('team', {
        url: '/team',
        template: '<ui-view/>',
        templateUrl: 'modules/team/client/views/team-members.client.view.html',
        controller: 'TeamController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Team'
        }
      });
  }
}());
