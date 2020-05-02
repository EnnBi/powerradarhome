$(function() {

    Highcharts.setOptions({
        chart: {
            backgroundColor: 'white'
        },
        credits: {
            enabled: false
        },
        colors: ['#00b584', '#0277a0', '#fff']
    });

    Highcharts.chart('container', {

        chart: {
            type: 'solidgauge',
            marginTop: 30
        },

        title: {
            text: 'Real Time Power Consumption',
            style: {
                fontSize: '20px',
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '8px'
            },
            pointFormat: '<span>Cost</span><br><span style="font-size:2em; color: {point.color}; font-weight: bold; text-align: center">198710.25 Rp/Hr</span>',
            positioner: function(labelWidth, labelHeight) {
                return {
                    x: 170 - labelWidth / 2,
                    y: 200
                };
            }
        },

        pane: {
            startAngle: -140,
            endAngle: 140,
            background: [{ // Track for Move
                outerRadius: '90%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                borderWidth: 0,
                shape: 'arc'
            }, { // Track for Exercise
                outerRadius: '105%',
                innerRadius: '88%',
                // backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0,
                shape: 'arc'
            }, { // Track for Stand
                //outerRadius: '32%',
                //innerRadius: '18%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0,
                //shape: 'arc'
            }]
        },

        yAxis: {
            reversed: false,
            min: 0,
            max: 420,
            lineWidth: 0,
            tickLength: 0,
            tickWidth: 0,
            tickColor: 'white',
            tickPosition: 'outside',
            minorTickLength: 0,
            tickPositions: [420, 0],
            labels: {
                distance: 30,
                enabled: true,
                x: 0,
                y: 0,
                format: '{value} kW',
                style: {
                    fontSize: 16
                }
            }
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '14px',
                dataLabels: {
                    enabled: true
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Power',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '95%',
                y: 110
            }],
            dataLabels: {
                borderRadius: 0,
                backgroundColor: "#fff",
                borderWidth: 0,
                borderColor: "#FFF",
                style: {
                    fontSize: "40px"
                },
                color: "grey",
                crop: true,
                formatter: function() {
                    var s;
                    s = '<span style="font-size: 30px;">' + this.point.y + 'kW</span>';
                    return s;
                },
                y: -60,
                //zIndex: 90

            }

        }, ]
    });


});