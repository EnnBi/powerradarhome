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

    Highcharts.chart('container1', {

        chart: {
            type: 'solidgauge',
            marginTop: 0
        },

        title: {
            text: '',
            style: {
                fontSize: '8px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '0px'
            },
            //pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold; text-align: center">{point.y}%</span>',
            positioner: function(labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: -140,
            endAngle: 140,
            background: [{ // Track for Move
                outerRadius: '90%',
                innerRadius: '88%',
                width: '290px',
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
            tickPositions: [0, 420],
            labels: {
                distance: 30,
                enabled: true,
                x: 0,
                y: 0,
                format: '{value} kW',
                style: {
                    fontSize: 8
                }
            }
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '11px',
                dataLabels: {
                    enabled: true
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
                name: '',
                borderColor: Highcharts.getOptions().colors[0],
                data: [{
                    color: Highcharts.getOptions().colors[0],
                    radius: '100%',
                    innerRadius: '95%',
                    y: 0 // OR 3*(25/100) 
                }],
                dataLabels: {
                    borderRadius: 0,
                    backgroundColor: "#fff",
                    borderWidth: 0,
                    borderColor: "#FFF",
                    style: {
                        fontSize: "20px"
                    },
                    color: "grey",
                    crop: true,
                    formatter: function() {
                        var s;
                        s = '<span>' + this.point.y + 'kW<br>' + '</span>' + '<div style="font-size:10px;">' + (this.point.y * 1035.78).toFixed(0) + ' Rp/Hr</div>';
                        return s;
                    },
                    y: -30,


                }

            },
            /*  {
                        name: 'Department Average',
                        borderColor: Highcharts.getOptions().colors[1],
                        data: [{
                            color: Highcharts.getOptions().colors[1],
                            radius: '75%',
                            innerRadius: '75%',
                            y: 6
                        }]
                    },  {
                        name: '',
                        borderColor: Highcharts.getOptions().colors[2],
                        data: [{
                            color: Highcharts.getOptions().colors[2],
                            radius: '50%',
                            innerRadius: '50%',
                            y: 50
                        }]
                    }*/
        ]
    });


});

/* Container 2 */

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

    Highcharts.chart('container2', {

        chart: {
            type: 'solidgauge',
            marginTop: 0
        },

        title: {
            text: '',
            style: {
                fontSize: '8px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '0px'
            },
            //pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold; text-align: center">{point.y}%</span>',
            positioner: function(labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: -140,
            endAngle: 140,
            background: [{ // Track for Move
                outerRadius: '90%',
                innerRadius: '88%',
                width: '290px',
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
            max: 700,
            lineWidth: 0,
            tickLength: 0,
            tickWidth: 0,
            tickColor: 'white',
            tickPosition: 'outside',
            minorTickLength: 0,
            tickPositions: [0, 700],
            labels: {
                distance: 30,
                enabled: true,
                x: 0,
                y: 0,
                format: '{value}',
                style: {
                    fontSize: 8
                }
            }
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '11px',
                dataLabels: {
                    enabled: true
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
                name: '',
                borderColor: Highcharts.getOptions().colors[0],
                data: [{
                    color: Highcharts.getOptions().colors[0],
                    radius: '100%',
                    innerRadius: '95%',
                    y: 500 // OR 3*(25/100) 
                }],
                dataLabels: {
                    borderRadius: 0,
                    backgroundColor: "#fff",
                    borderWidth: 0,
                    borderColor: "#FFF",
                    style: {
                        fontSize: "20px",
                    },
                    color: "grey",
                    crop: false,
                    formatter: function() {
                        var s;
                        s = '<span>' + this.point.y + '<div>m<sup>3</sup></div>/min' + '</span><br>' + '<div style="font-size:10px;">12.96 Rp/m<sup>3</sup></div>';
                        return s;
                    },
                    y: -30,


                }

            },
            /*  {
                        name: 'Department Average',
                        borderColor: Highcharts.getOptions().colors[1],
                        data: [{
                            color: Highcharts.getOptions().colors[1],
                            radius: '75%',
                            innerRadius: '75%',
                            y: 6
                        }]
                    },  {
                        name: '',
                        borderColor: Highcharts.getOptions().colors[2],
                        data: [{
                            color: Highcharts.getOptions().colors[2],
                            radius: '50%',
                            innerRadius: '50%',
                            y: 50
                        }]
                    }*/
        ]
    });


});