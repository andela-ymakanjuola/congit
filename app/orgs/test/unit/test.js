describe('OrgsService', function(){
  
  beforeEach(module('orgs'));

  var OrgsService

  beforeEach(inject(function (OrgsService) {
    
     $OrgsService = OrgsService;
    
  }));

  it('should return a promise', inject(function ($q) {
    var deferred = $q.defer();
    var promise = deferred.promise;

    expect($OrgsService.get() instanceof promise).toBeEqual(true);
  }));

  it('org', function () {
    expect(typeof $OrgsService.get()).toBeEqual('object');
  });

  it('org members', function () {
    expect(typeof $OrgsService.getMembers().toBeEqual('object'));
  });

});

describe('OrgsController', function () {
  var $controller, $scope;

  beforeEach(module('orgs'));

  beforeEach(inject(function ($injector) {

  }));


});