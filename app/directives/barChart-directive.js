define([
    './directives',
    'd3',
    'components/barChart'
], function(directives, d3, barChart) {
    'use strict';

    directives.directive("barChart", [

        function() {
        	var barChart = barChart();
            function link(scope,element,attrs) {

            }
            return {
                link: link,
                restrict: 'E'
            }
        }
    ])
})