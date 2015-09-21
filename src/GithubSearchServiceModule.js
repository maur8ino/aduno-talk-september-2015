/*global angular: true */

(function() {
  'use strict';
  function GithubSearchService($q, $timeout) {
    function getUserReposList(user) {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve([{
          id: 37024234,
          name: 'react-bem-mixin',
          full_name: 'maur8ino/react-bem-mixin',
          html_url: 'https://github.com/maur8ino/react-bem-mixin',
          description: 'A React.js mixin for generating BEM class names'
        }]);
      }, 1500);
      return deferred.promise;
    }

    function getUserRepo(user, repo) {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve({
          id: 37024234,
          name: 'react-bem-mixin',
          full_name: 'maur8ino/react-bem-mixin',
          html_url: 'https://github.com/maur8ino/react-bem-mixin',
          description: 'A React.js mixin for generating BEM class names'
        });
      }, 1500);
      return deferred.promise;
    }

    return {
      getUserReposList: getUserReposList,
      getUserRepo: getUserRepo
    };
  }
  angular
    .module('GithubSearchServiceModule', [])
    .service('GithubSearchService', ['$q', '$timeout', GithubSearchService]);
})();
