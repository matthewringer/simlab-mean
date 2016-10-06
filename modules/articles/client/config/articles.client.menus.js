(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Stories',
      state: 'articles.list',
      roles: ['*'],
      position: 2
    });
  }
}());
