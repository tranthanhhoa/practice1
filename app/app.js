/**
 * loads sub modules and wraps them up into the main module
 */
define([
  'domReady',
  'angular',
  'angular-route',

  /*
   * Load angular modules
   * if you get 'unknown {x}Provider' errors from angular, be sure they are
   * properly referenced in one of the module dependencies below.
   */

  // External modules

  // Internal modules
  // Core modules
  'services/services',
  'controllers/controllers',
  'filters/filters',
  'directives/directives',
  // Custom modules
  'controllers/sample-controller',

  'directives/sample-directive',
  'directives/sampleChart-directive',
  'directives/barChart-directive',

  'services/sample-service'

], function (domReady, ng) {
  'use strict';

  var app = ng.module('app', [
    'app.controllers',
    'app.directives',
    'app.filters',
    'app.services'
  ]);

  // Kickstart application
  function bootstrap(){
    domReady(function (document) {
      ng.bootstrap(document, ['app']);
    });
  }

  return {
    bootstrap: bootstrap,
    getNgModule: function(){ return app; }
  };
});