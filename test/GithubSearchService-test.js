/*global angular: true, module: true, inject: true, describe: true, beforeEach: true, it: true, expect: true */

describe('Service: GithubSearchService', function () {
  'use strict';

  var sutService, $timeout, $httpBackend;

  beforeEach(module('GithubSearchServiceModule'));
  beforeEach(inject(function($injector) {
    sutService = $injector.get('GithubSearchService');
    $timeout = $injector.get('$timeout');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    //$httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return the user\'s repository list', function(done) {
    var repoList = [{
      id: 37024234,
      name: 'react-bem-mixin',
      full_name: 'maur8ino/react-bem-mixin',
      html_url: 'https://github.com/maur8ino/react-bem-mixin',
      description: 'A React.js mixin for generating BEM class names'
    }];

    $httpBackend.when('GET', 'https://api.github.com/users/maur8ino/repos')
      .respond(repoList);

    sutService.getUserReposList('maur8ino').then(function(result) {
      expect(result).toEqual(repoList);
      done();
    });

    $httpBackend.flush();
  });

  it('should return the user\'s repository information', function(done) {
    var repo = {
      id: 37024234,
      name: 'react-bem-mixin',
      full_name: 'maur8ino/react-bem-mixin',
      html_url: 'https://github.com/maur8ino/react-bem-mixin',
      description: 'A React.js mixin for generating BEM class names'
    };

    $httpBackend.when('GET', 'https://api.github.com/repos/maur8ino/react')
      .respond(repo);

    sutService.getUserRepo('maur8ino', 'react').then(function(result) {
      expect(result).toEqual(repo);
      done();
    });

    $httpBackend.flush();
  });
});
