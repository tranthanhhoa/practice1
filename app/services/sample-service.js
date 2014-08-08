define([
        './services',
        'd3'
    ],
    function(services, d3) {
        'use strict';
        //---------------------------------------------------
        // BEGIN code for this service
        //---------------------------------------------------

        services.factory('sampleService', ['$q',
            function($q) {

                return {
                    getData: function() {
                        var defer = $q.defer();
                        d3.json("app/data/data.json", function(data) {
                            defer.resolve(data);
                        })

                        return defer.promise;
                    }
                }
            }
        ]);

        //---------------------------------------------------
        // END code for this service
        //---------------------------------------------------
    });