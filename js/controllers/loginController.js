app.controller("Login", function($scope) {
	
	$scope.mostrarMail=false;
	var logged=new Firebase("https://muebleria.firebaseio.com/");
	logged.onAuth(function authDataCallback(authData){
		if (authData){
			debugger;
			$scope.mostrarMail=true;
			$scope.email=authData.password.email;
		}
	});
	$scope.login=function(){
		debugger;
		if($scope.email && $scope.password){
			var ref = new Firebase("https://muebleria.firebaseio.com/");
			ref.authWithPassword({
			  email    : $scope.email,
			  password : $scope.password
			}, function(error, authData) {
			  if (error) {
			    console.log("Error en el login!", error);
			  } else {
			    console.log("Autenticado correctamente!:", authData);
			    $scope.mostrarMail=true;
			  }
			});		
		}
	}
});