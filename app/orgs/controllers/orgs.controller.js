angular.module('orgs')

.controller('OrgsController', ['$scope','OrgsService', function ($scope, OrgsService){

  var store = this;
  store.orgs = [];
  store.orgsMembers = [];

  
  OrgsService.get('andela').success(function (data) {
    store.orgs = data;
  });


}]);