module.exports = function (config) {
  'use strict';
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*-test.js'
    ],

    port: 9876,
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],
    reporters: ['mocha'],

    //autoWatch: true,
    singleRun: true
  });
};
