(function() {
  'use strict';

  angular
    .module('core')
    .controller('SocialButtonsController', SocialButtonsController);

  SocialButtonsController.$inject = ['$scope'];

  function SocialButtonsController($scope) {
    var vm = this;

    vm.twitter_username = 'twitter_username';
    vm.email = 'email.com';
    vm.facebook_username = 'facebook_username';
    vm.linkedin_username = 'linkedin_username';

    init();

    function init() {
    }
  }
}());
