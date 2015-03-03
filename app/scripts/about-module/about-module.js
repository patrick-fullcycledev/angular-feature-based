'use strict';

angular.module ('about-module',[])
	.config(function ($routeProvider){
		$routeProvider
			.when('/about',{
				templateUrl: 'scripts/about-module/views/about.html',
				controller: 'about.ctrl'
			});
});