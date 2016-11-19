/**
 * Created by JaminTc on 11/2/2016.
 */
(function(){
    'use strict';

    angular
        .module('myApp.filter',['ngRoute'])
        .filter('jsonDateFix', function(){
            return function (jsonDate){
                if (angular.isUndefined(jsonDate) || jsonDate=== "/Date(-62135596800000-0000)/"){
                    return "----";
                }
                else {
                    var date = new Date(parseInt(jsonDate.substr(6)));
                    return date.toDateString();
                }
            };
        });
})();