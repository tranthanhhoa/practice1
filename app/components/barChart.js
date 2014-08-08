define([
    'd3'
], function(d3) {
    var module - function() {
        var width = 500,
            height = 500,
            gap = 0,
            ease = 'cubic-in-out',
            margin = {
                top: 20,
                bottom: 20,
                left: 40,
                right: 40
            };
        var svg, duration = 500;

        var chart = function(_selection) {
            _selection.each(function(_data) {
                var chartW = width - margin.left - margin.right,
                    chartH = height - margin.top - margin.bottom;
                var xScale = d3.scale().linear()
                    .domain(_data.map(function(d, i) {
                        return i;
                    }))
                    .rangeRoundBands([0, chartW], 0.1);

                var yScale = d3.scale().linear()
                    .domain([0, d3.max(_data, function(d) {
                        return d;
                    })])
                    .range([chartH, 0]);
                var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
                var yAxis = d3.svg.axis().scale(yScale).orient('left');
            });
        }

        chart.width = function(w) {
            if (!arguments.length) width;
            width = w;
            return chart;
        }

        chart.height = function(h) {
            if (!arguments.length) height;
            height = h;
            return chart;
        }

        chart.duration = function(d) {
            if (!arguments.length) duration;
            duration = d;
            return chart;
        }

        chart.gap = function(g) {
            if (!arguments.length) gap;
            gap = g;
            return chart;
        }

        chart.ease = function(e) {
            if (!arguments.length) ease;
            ease = e;
            return chart;
        }

        return chart;
    }
    return module;
})