var label = [];
var data = [];
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    var IP = "http://localhost:8081"
    var guage_url = IP + "/realpowerconsumption";
    var linearchart_url = IP + "/realtimecost";
    var sites_url = IP + "/sites";
    var categories_url = IP + "/categories/"
    $scope.noData = true;
    $scope.color = ['#990b4f', '#0b00d9', '#a60024', '#b05b10', '#573000', '#2c5700', '#10b0a8', '#00574b', '#001757', '#370057', '#014217']
    $http.get(sites_url)
        .then(function(response) {
            $scope.sites = response.data;
            var sites = [];
            response.data.forEach(data => {
                var obj = {
                    anyChildren: true,
                    text: data.name,
                    type: 'site',
                    id: data.id,
                    siteId: data.id
                }
                sites.push(obj);
            });
            $scope.menuSites = sites;
            $scope.showMenu = true;
        });

    $scope.fetchcategories = function(id) {
        $http.get(categories_url + id).then(function(response) {
            $scope.categories = response.data;
        })
    };

    $scope.sitepowerconsumption = function() {
        if ($scope.powerguagesite && $scope.powerguagegroup) {
            $http({
                url: guage_url,
                method: "GET",
                params: {
                    site: $scope.powerguagesite,
                    group: $scope.powerguagegroup
                }
            }).then(function(response) {
                $scope.groups = response.data["devicegroup"];
                $scope.power = response.data["powerconsumption"];
                var val = ($scope.power / 1000).toFixed(0);
                var chart = $('#container1').highcharts();
                if (val > 380) {
                    chart.yAxis[0].update({
                        tickPositions: [0, (700)],
                        max: 700
                    });
                }

                chart.series[0].points[0].update(Number(val));


            });
        }
    }

    $scope.addSeries = function(id, postData, name) {

        $http({
                url: linearchart_url,
                data: postData,
                method: 'POST',
                async: false,
                config: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                var lineardata = []
                response.data.forEach(data => {
                    if (Number(moment(data.dateTime).format('mm')) % 15 == 0) {
                        var cost = (data.power * 1035.78 / 1000).toFixed(2);
                        obj = [moment(data.dateTime).valueOf(), Number(cost)]
                        lineardata.push(obj);
                    }
                });
                $scope.linearchart = true;
                if (lineardata.length > 0) {
                    $scope.noData = false;
                }
                $('#linear-chart').highcharts().addSeries({
                    accessibility: {
                        keyboardNavigation: {
                            enabled: false
                        }
                    },
                    id: id,
                    data: lineardata,
                    fillOpacity: 0.0,
                    name: name,
                    color: $scope.color[0],
                    marker: {
                        enabled: false
                    },
                    threshold: null,
                });
                $scope.color.shift();
            });



    }

    $scope.removeSeries = function(id) {
        console.log($('#linear-chart').highcharts().get(id).color);
        $scope.color.push($('#linear-chart').highcharts().get(id).color)
        $('#linear-chart').highcharts().get(id).remove();
    }
});

app.directive('menu', function() {
    return {
        restrict: 'A',

        link: function(scope, element, attrs) {
            var tree = angular.element(element).tree({
                width: 300,
                uiLibrary: 'bootstrap',
                cascadeCheck: false,
                checkboxes: true,
                hasChildrenField: 'anyChildren',
                dataSource: scope.menuSites
            });

            angular.element(element).on('expand', function(e, $node, id) {
                var record = tree.getDataById(id);
                if (tree.getChildren($node).length === 0) {
                    data = getsubmenu(record);
                    children = $.grep(data, function(i) {
                        return true;
                    });
                    for (i = 0; i < children.length; i++) {
                        tree.addNode(children[i], $node);
                    }

                }
            });

            angular.element(element).on('checkboxChange', function(e, $node, id, state) {
                var checked = state == 'checked' ? true : false
                if (checked) {
                    var seriesId = getSeriesId(id);
                    var data = {
                        siteId: Number(id.siteId),
                        deviceCategory: id.deviceCategory,
                        deviceType: id.deviceType,
                        deviceId: Number(id.deviceId)
                    }
                    scope.addSeries(seriesId, data, id.text);
                } else {
                    if (tree.getCheckedNodes().length <= 0) {
                        scope.noData = true;
                        console.log(" show no data icon")
                    }
                    var seriesId = getSeriesId(id);
                    scope.removeSeries(seriesId);
                }
            });
        }
    }
});

function getSeriesId(record) {
    if (record.deviceId != null)
        return record.siteId + record.deviceCategory + record.deviceType + record.deviceId
    else if (record.deviceType != null)
        return record.siteId + record.deviceCategory + record.deviceType
    else if (record.deviceCategory != null)
        return record.siteId + record.deviceCategory
    else
        return record.siteId;
}

function getsubmenu(record) {
    var url, type;
    var submenus = [];
    switch (record.type) {
        case 'site':
            {
                url = "http://localhost:8081/categories/" + record.id;
                type = 'category';
                break;
            }
        case 'category':
            {
                url = "http://localhost:8081/types/" + record.id;
                type = 'type';
                break;
            }
        case 'type':
            {
                url = "http://localhost:8081/devices/" + record.id;
                type = 'device';
                break;
            }
        default:
            {}

    }
    $.ajax({
        url: url,
        async: false,
        success: function(data) {
            data.forEach(obj => {
                var menu = {
                    anyChildren: type == 'device' ? false : true,
                    text: obj.name || obj,
                    type: type,
                    id: obj.id || obj,
                    siteId: record.siteId,
                    deviceCategory: type == 'category' ? obj : record.deviceCategory,
                    deviceType: type == 'type' ? obj : record.deviceType,
                    deviceId: type == 'device' ? obj.id : null
                }
                submenus.push(menu);
            });
        }
    });

    return submenus;
}