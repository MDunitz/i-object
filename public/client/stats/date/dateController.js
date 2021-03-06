angular.module('theButton.dateController',[])

.controller('dateController', function ($scope, getData, $timeout, Info){
    //ensures value of inputbox is the saved username from login
    $scope.username = Info.username;

    //tupleData factory object gets updated by the retrieveInfo method
    $scope.tupleData=getData.tupleData.date;

    $scope.retrieveInfo= getData.retrieveInfo;

    //resets chart on load
    $scope.chart=null

    //d3 rendering using c3(a d3) library
    var showGraph = function() {
      $scope.tupleData=getData.tupleData.date;
      //console.log($scope.tupleData)
      $scope.chart=c3.generate({
        bindto: '#chart',
        type: 'area-spline',
        data: {
            columns: [
            $scope.tupleData
            ]

        },
        colors: {
            temp: '#ffff99'
        },
        axis: {
            x: {
                type: 'category',
                categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
            }
        }
    });
  }

    $scope.reRenderDate = function(user) {
      $scope.retrieveInfo(user).then(function(info){
      console.log(info);
      showGraph();
      });
    };

    //d3.select("svg").remove();

})
