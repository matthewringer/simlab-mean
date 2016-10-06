(function () {
  'use strict';

  angular
    .module('services.admin')
    .controller('ServicesAdminController', ServicesAdminController);

  ServicesAdminController.$inject = ['$scope', '$state', '$window', 'serviceResolve', 'Authentication'];

  function ServicesAdminController($scope, $state, $window, service, Authentication) {
    var vm = this;

    vm.service = service;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Service
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.service.$remove($state.go('admin.services.list'));
      }
    }

    // Save Service
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.serviceForm');
        return false;
      }

      // Create a new service, or update the current instance
      vm.service.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.services.list'); // should we send the User to the list or the updated Service's view?
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
