(function(){
'use strict';

  angular.module('myApp.view1', ['ngRoute'])

      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl',
            controllerAs: 'vm'
        });
      }])
      .controller('View1Ctrl', view1controller);
  view1controller.$inject = ['firstService'];

  function view1controller(firstService) {
    var vm = this;

    vm.person = {
    //     personId: 0,
    //     firstName:null,
    //     lastName:null,
    //     dateOfBirth:null,
        isPerson: false
    };

    vm.GetPerson = getPerson;

    Activate();
    function Activate() {
      //getPerson(vm.person)
    }

    function getPerson(person) {
      firstService.GetFirstService(
          person,
          function (responseData) {
              vm.person = responseData.Person;
              if(angular.isDefined(responseData.Person) && angular.isDefined(responseData.Person.FirstName)){
                   vm.person.isPerson = true;
              }
              else {
                  vm.person.isPerson = false;
              }
          },
          function (responseData, responseStatus) {

          }
      )
    }
  }
})();