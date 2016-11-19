(function(){
'use strict';

/**
 * Created by JaminTc on 10/30/2016.
 */


angular
    .module('myApp.firstService',['ngRoute'])
    .service('firstService', firstService);
firstService.$inject = ['$http','ApiBaseUrl'];

function firstService($http, ApiBaseUrl) {

    this.GetFirstService = getFirstService;


    function getFirstService(person,successCallback, errorCallback) {
        $http({
            method: "GET",
            dataType: "json",
            url:ApiBaseUrl + "/Person/" + person.personId
            //data: person
            //headers: {'Content-Type': ' application/json; charset=utf-8;'}

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
})();