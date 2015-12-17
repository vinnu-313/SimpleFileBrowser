'use strict';

angular.module('sfbApp.filters', [])

.filter('extractName', function(){
	return function(input){
		return input.split('/').pop();
	};
})
.filter('fileName', function(){
	return function(input){
		if(input.length >10){
			return input.substr(0, 10)+'...';
		}
		return input;
	};	
});