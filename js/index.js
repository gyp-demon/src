/**
 * Created by Administrator on 2017/4/25.
 */
var app = angular.module("app", ['ui.router'])
app.directive('inputFile', function () {
    return {
        template: '<div class="input-file">' +
        '<label for="{{inputId}}"></label>' +
        '<input type="file" id="{{inputId}}">' +
        '</div>',
        restrict: 'E',
        scope: {},
        controller: function ($scope) {
            $scope.inputId = 'inputFile' + $scope.$id
        },
        link: function (scope, ele) {
            var inputFile = ele.find('div');
            var input = $(inputFile).find('input');
            input.on('change', function () {
                var reader = new FileReader();

                reader.readAsDataURL(this.files[0]);

                reader.onload = function () {
                    console.log($(inputFile).find('label'));
                    $(inputFile).find('label')[0].style.background = 'url(' + this.result + ') no-repeat center center';
                }


            })
        }
    }
})


app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("child1")
    $stateProvider
        .state({
            name: "child1",
            url: "/child1",
            templateUrl: "pages/child1.html"
        })
        .state({
            name: "child2",
            url: "/child2",
            templateUrl: "pages/child2.html"
        })
        .state({
            name: "child3",
            url: "/child3",
            templateUrl: "pages/child3.html"
        })
        .state({
            name: "child4",
            url: "/child4",
            templateUrl: "pages/child4.html"
        })

})