(function(){
	var app = angular.module('cadastro',[]);

	app.controller('CadastroController', function(){
		this.partners = parceiros;
	});

	var parceiros = [
	{
			name : 'Saraiva',
			website : 'www.saraiva.com.br',
			qtdeProducts : 1000,
			hasVariableComition : true,
			sales : 10000.50,
			images : [{
				logo:'http://www.saraiva.com.br/skin/frontend/saraiva/saraiva/images/logo-saraiva.png'
			}]
	},
	{
			name : 'Boockers',
			website : 'www.boockers.com.br',
			qtdeProducts : 500,
			hasVariableComition : false,
			sales : 20000.99,
			images : [{
				logo:'http://img.submarino.com.br/marketplace/logo/grande/13933305000106.jpg'
			}]
	}
	];

})();
