define([
    'd3'
], function(d3) {
    var module = function() {
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

                var barW = chartW / _data.length;

                if (!svg) {
                    svg = d3.select(this)
                        .append("svg")
                        .classed("chart", true);
                    var container = svg.append('g').classed('conteiner-group', true);
                    container.append('g').classed("chart-group", true);
                    container.append('g').classed('x-axis axis', true);
                    container.append('g').classed('y-axis axis', true);
                }

                svg.transition().duration(duration).attr({
                    width: width,
                    height: height
                });
                svg.select('.container-group')
                    .attr({
                        transform: "translate(" + margin.left + "," + margin.top + ")"
                    });

                svg.select('.x-axis.axis')
                    .transition()
                    .duration(duration)
                    .ease(ease)
                    .attr({
                        transform: "translate(0," + chartH + ")"
                    })
                    .call(xAxis);

                svg.select('.y-axis.axis')
                    .transition()
                    .duration(duration)
                    .ease(ease)
                    .call(yAxis);
                var gapSize = xScale.rangeBand() / 100 * gap;
                var barW = xScale.rangeBand() - gapSize;
                var bars = svg.select('.chart-group')
                    .selectAll('.bar')
                    .data(_data);
                bars.enter().append('rect').classed('bar', true)
                    .attr({
                        x: chartW,
                        width: barW,
                        y: function(d) {
                            return yScale(d);
                        },
                        height: function(d) {
                            return chartH - yScale(d);
                        }
                    })
                bars.transition()
                    .duration(duration)
                    .ease(ease)
                    .attr({
                        width: barW,
                        x: function(d, i) {
                            return xScale(i) + gapSize / 2;
                        },
                        y: function(d) {
                            return yScale(d);
                        },
                        height: function(d) {
                            return chartH - yScale(d);
                        }
                    });

                bars.exit().transition().style({
                    opacity: 0
                }).remove();

                duration = 500;
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