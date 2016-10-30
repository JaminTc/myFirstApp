/**
 * Created by JaminTc on 10/30/2016.
 */
'use strict';

angular
    .module('myApp.service1')
    .service('service1', firstService);
firstService.$inject=['$http','ApiBaseUrl'];

function firstService($http, ApiBaseUrl) {

    this.GetFirstService = getFirstService;


    function getFirstService(successCallback, errorCallback) {
        $http({
            method: "GET",
            dataType: "json",
            url:ApiBaseUrl + "/1"
        })
            .then(
                function (response) {
                    successCallback(response.data)
                },
                function (response) {
                    if(angular.isDefined(errorCallback)){
                        errorCallback(response.data, response.status);
                    }
                }

            );
    }
}
