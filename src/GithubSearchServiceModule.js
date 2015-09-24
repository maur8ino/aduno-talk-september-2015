/*global angular: true */

(function() {
  'use strict';
  function GithubSearchService($q, $http) {
    function getUserReposList(username) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/users/' + username + '/repos')
        .then(function(result) {
          deferred.resolve(result.data);
        }, function(result) {
          deferred.reject(result);
        });
      return deferred.promise;
    }

    function getUserRepo(username, reponame) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/repos/' + username + '/' + reponame)
        .then(function(result) {
          deferred.resolve(result.data);
        }, function(result) {
          deferred.reject(result);
        });
      return deferred.promise;
    }

    return {
      getUserReposList: getUserReposList,
      getUserRepo: getUserRepo
    };
  }
  angular
    .module('GithubSearchServiceModule', [])
    .service('GithubSearchService', GithubSearchService);
})();
