var app = angular.module('dash', []);

app.controller('mainCtrl', function(){
	var	game	=	this;
	game.testo	=	[];
	
	game.sbumit	=	function(game1){
		console.log('saved');
		//game.testo	=	angular.copy(game.cast);
		game.testo.push(game.cast);
		//game1.$setUntouched();
		game1.$setPristine();
	};
	game.mint	=	[];
});