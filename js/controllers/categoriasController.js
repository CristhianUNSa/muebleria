app.controller("Categorias", function($scope, $firebaseArray) {
  var ref = new Firebase("https://muebleria.firebaseio.com/categorias");
  var $scope.categorias = $firebaseArray(ref);
});