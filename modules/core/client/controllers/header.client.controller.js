(function () {
  'use strict';

  angular
    .module('core')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$state', 'Authentication', 'menuService'];

  function HeaderController($scope, $state, Authentication, menuService) {
    var vm = this;
    vm.accountMenu = menuService.getMenu('account').items[0];
    vm.authentication = Authentication;
    vm.isCollapsed = false;
    vm.menu = menuService.getMenu('topbar');

    // TODO: Placeholders
    vm.headerImageURL = '/modules/core/client/img/background/front_projects.jpg';
    // vm.isHomepage = false;
    // vm.title = 'some page title';

    $scope.$on('$stateChangeSuccess', stateChangeSuccess);

    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
    }

    $scope.currState = $state;
    $scope.$watch('currState.current.name', function(newValue, oldValue) {
      vm.isHomepage = newValue === 'home';
      vm.title = newValue;
    });
  }
}());
