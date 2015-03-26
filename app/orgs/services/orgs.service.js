angular.module('orgs')

.factory('OrgsService', ['$http', function($http){
  var orgsName;
  return {

    get: function (orgName) {
      orgsName = orgName;
      return $http.get('https://api.github.com/orgs/' + orgName);
    },

    getMembers: function () {
      return $http.get('https://api.github.com/orgs/' + orgName+'/members');
    } 

  };

  
}]);