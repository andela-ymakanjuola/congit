
(function(){
  angular.module('app',['ngMaterial', 'orgs'])

  //Material design theme config
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme("default")
      .primaryPalette("indigo")
      .accentPalette("red");
  });

})()
