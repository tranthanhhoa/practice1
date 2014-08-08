requirejs.config({
    appDir: '.',
    baseUrl: 'app',
    // Set paths
    paths: {
        'angular': ['../lib/angular/angular.min'],
        'angular-route': ['../lib/angular-route/angular-route.min'],
        'bootstrap': ['../vendor/bootstrap-3.0.1/js/bootstrap.min'],
        'd3': ['../lib/d3/d3.min'],
        'domReady': ['../lib/requirejs-domready/domReady'],
        'jquery': ['../vendor/jquery-1.10.2/jquery.min']
    },
    // Set dependencies
    shim: {
        'angular': {exports: 'angular'},
        'angular-route': ['angular'],
        'bootstrap': ['jquery']
    }
});

require([
    'app',
    'routes'
],
    function (app) {
        // Bootstrap application
        app.bootstrap();

    });