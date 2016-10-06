(function () {
  'use strict';

  angular
    .module('team')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Team',
      state: 'team',
      roles: ['*']
    });
  }
}());
