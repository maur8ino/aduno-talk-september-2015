/*global angular: true, module: true, inject: true, describe: true, beforeEach: true, it: true, expect: true */

describe('Controller: GithubSearchCtrl', function () {
  'use strict';

  var $rootScope, mockGithubSeachService, dummyEvent, sutCtrl, deferred;

  beforeEach(module('GithubSearchModule'));
  beforeEach(function() {
    dummyEvent = { preventDefault: angular.noop };

    inject(function($q, $timeout) {
      mockGithubSeachService = {
        getUserReposList: function(username) {
          deferred = $q.defer();
          return deferred.promise;
        },
        getUserRepo: angular.noop
      };
    });

    inject(function(_$controller_, _$rootScope_) {
      $rootScope = _$rootScope_;
      sutCtrl = _$controller_('GithubSearchCtrl', {
        'GithubSearchService': mockGithubSeachService
      });
    });
  });

  it('should have initialized the controller', function () {
    expect(sutCtrl.loading).toBeFalsy();
    expect(angular.isFunction(sutCtrl.submitUsername)).toBeTruthy();
    expect(angular.isFunction(sutCtrl.submitRepo)).toBeTruthy();
  });

  it('should call submitUsername and get a $q promise', function () {
    sutCtrl.selectedUser = 'maur8ino';
    sutCtrl.submitUsername(dummyEvent);
    expect(sutCtrl.loading).toBeTruthy();

    deferred.resolve([]);
    $rootScope.$digest();
    expect(sutCtrl.loading).toBeFalsy();
  });
});
