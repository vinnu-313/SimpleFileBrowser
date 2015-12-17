'use strict';

angular.module('sfbApp.services', [])

.service('DirService', function ($http){
	this.getDirData = function(){
		return $http({
			url : 'stat/dirinfo.json',
			method: 'GET'
		});
	};
	this.getFileData = function(){
		return $http({
			url: 'stat/fileinfo.json',
			method: 'GET'
		});
	};
});