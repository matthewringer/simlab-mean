﻿(function () {
  'use strict';

  // Configuring the Service Admin module
  angular
    .module('services.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Services',
      state: 'admin.services.list'
    });
  }
}());
