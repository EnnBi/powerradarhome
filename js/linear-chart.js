// Data generated from http://www.bikeforums.net/professional-cycling-fans/1113087-2017-tour-de-france-gpx-tcx-files.html
var elevationData = []
Highcharts.setOptions({
    global: {
        /**
         * Use moment-timezone.js to return the timezone offset for individual
         * timestamps, used in the X axis labels and the tooltip header.
         */
        getTimezoneOffset: function(timestamp) {

            var zone = 'Asia/Kolkata',
                timezoneOffset = -moment.tz(timestamp, zone).utcOffset();
            return timezoneOffset;
        }
    }
});
// Now create the chart
Highcharts.chart('linear-chart', {

    chart: {
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600
        },
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        }
    },

    caption: {
        //text: 'This chart uses the Highcharts Annotations feature to place labels at various points of interest. The labels are responsive and will be hidden to avoid overlap on small screens.'
    },

    title: {
        text: ''
    },

    accessibility: {
        // description: 'Image description: An annotated line graph illustrates the 8th stage of the 2017 Tour de France cycling race from the start point in Dole to the finish line at Station des Rousses. Altitude is plotted on the Y-axis at increments of 500m and distance is plotted on the X-axis in increments of 25 kilometers. The line graph is interactive, and the user can trace the altitude level at every 100-meter point along the stage. The graph is shaded below the data line to visualize the mountainous altitudes encountered on the 187.5-kilometre stage. The three largest climbs are highlighted at Col de la Joux, Côte de Viry and the final 11.7-kilometer, 6.4% gradient climb to Montée de la Combe de Laisia Les Molunes which peaks at 1200 meters above sea level. The stage passes through the villages of Arbois, Montrond, Bonlieu, Chassal and Saint-Claude along the route.'
    },

    credits: {
        enabled: false
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%H:%M'
        },
        title: {
            text: 'Time'
        },
        tickInterval: 3600 * 1000,
        tickmarkPlacement: 'on'
    },
    tooltip: {
        formatter: function() {
            return '<span style="color:' + this.color + '">' + this.series.name + '</span><br> ' + Highcharts.dateFormat('%A %b %e,%H:%M', new Date(this.x)) + '<br/>' + '<b>Rp : </b>' + this.y + '<br/>';
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        maxPadding: 0.35,
        title: {
            text: 'Cost(Rp)'
        },
        labels: {
            format: '{value}'
        }

    },
    legend: {
        enabled: false
    },

    series: [{
        accessibility: {
            keyboardNavigation: {
                enabled: false
            }
        },
        data: elevationData,
        lineColor: Highcharts.getOptions().colors[1],
        color: Highcharts.getOptions().colors[2],
        fillOpacity: 0.0,
        name: 'Rp',
        marker: {
            enabled: false
        },
        threshold: null,
    }]

});