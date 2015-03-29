angular.module('orgs')

.controller('OrgsController', ['$scope','OrgsService', function ($scope, OrgsService, $timeout, $q){

  var store = this;
  store.orgs = [];
  store.orgsMembers = [];

  var self = this;
    // list of `state` value/display objects
    self.orgs        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;
    self.simulateQuery = true;
    self.isDisabled    = false;
  

  

  $scope.getOrg = function (search) {
    console.log(search);
    OrgsService.get(search).success(function (data) {
      store.orgs = data;
    });
  }

  $scope.getMembers = function () {
    OrgsService.getMembers().success(function (data) {
      store.orgsMembers = data;
    });
  }
    


    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      console.log('i see u');
      var results = query ? self.orgs.filter( createFilterFor(query) ) : [],
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      console.log('i see u 2');
      var allOrgs = 'Github, Andela, Microsoft, Google';
      return allOrgs.split(/, +/g).map( function (org) {
        return {
          value: org.toLowerCase(),
          display: org
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      console.log('i see u 3');
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(org) {
        return (org.value.indexOf(lowercaseQuery) === 0);
      };
    }




}]);