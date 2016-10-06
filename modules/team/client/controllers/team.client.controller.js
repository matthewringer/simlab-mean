(function () {
  'use strict';

  angular
    .module('team')
    .controller('TeamController', TeamController);

  TeamController.$inject = ['$scope', '$state'];

  function TeamController($scope, $state) {
    var vm = this;

    init();

    function init() {
    }
  }
}());
