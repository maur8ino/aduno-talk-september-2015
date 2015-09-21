/*global angular: true */

(function() {
  'use strict';
  function GithubSearchCtrl(GithubSearchService) {
    // Init
    var vm = this;

    angular.extend(vm, {
      loading: false,
      repoList: [],
      username: undefined,
      repo: undefined,
      submitUsername: function(e) {
        e.preventDefault();
        if (!vm.selectedUser) {
          return;
        }
        vm.loading = true;
        GithubSearchService.getUserReposList(vm.selectedUser)
          .then(function(response) {
            vm.repo = undefined;
            vm.username = vm.selectedUser;
            vm.repoList = response;
            vm.selectedRepo = vm.repoList.length ? vm.repoList[0] : undefined;
          }).finally(function() {
            vm.loading = false;
          });
      },
      submitRepo: function(e) {
        e.preventDefault();
        if (!vm.selectedRepo) {
          return;
        }
        vm.loading = true;
        GithubSearchService.getUserRepo(vm.selectedUser, vm.selectedRepo)
          .then(function(response) {
            vm.repo = response;
          }).finally(function() {
            vm.loading = false;
          });
      }
    });
  }

  angular
    .module('GithubSearchModule', ['GithubSearchServiceModule'])
    .controller('GithubSearchCtrl', ['GithubSearchService', GithubSearchCtrl]);
})();
