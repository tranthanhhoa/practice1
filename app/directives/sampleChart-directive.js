define([
    './directives',
    'components/sampleChart'
], function(directives, sampleChart) {
    'use strict';
    directives.directive("sampleChart", function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="chart"></div>',
            scope: {
                data: '=data'
            },
            link: function(scope,element,attrs) {
            	var chart = sampleChart(element[0]);
            	chart.setData(scope.data);
            }
        }
    })
})