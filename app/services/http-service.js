angular.module('myApp').service('httpService', ['$http', function(http){
  this.getPeople = function(){
    return http.get("assets/data/data.json")
      .then((res) => {
        return res.data;
      }, function(error){
        console.log(error);
      })
  }

  this.getPeopleResreq = function(){
    return http.get('https://reqres.in/api/users')
      .then(res=>{
        return res.data.data;
      }, function(error){
        console.log(error)
    })
  }
}])