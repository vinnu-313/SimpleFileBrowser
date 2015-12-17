'use strict';

angular.module('sfbApp.controllers', ['sfbApp.services'])


.controller('AppCtrl', function($scope, DirService){
	$scope.appName = "Simple File Browser.";
	$scope.treeOptions = {
	    nodeChildren: "Nodes",
	    dirSelectable: true,
	    injectClasses: {
	        ul: "a1",
	        li: "tree-li",
	        // liSelected: "a7",
	        iExpanded: "glyphicon glyphicon-minus",
	        iCollapsed: "glyphicon glyphicon-plus",
	        iLeaf: "glyphicon glyphicon-minus",
	        label: "a6",
	        labelSelected: "tree-selected"
	    }
	};
	DirService.getDirData().then(function(response){
		$scope.dirData = response.data;
		$scope.expandedNodes = [];
		$scope.expandedNodes.push($scope.dirData[0]);
	}, function(response){
		console.error(response);
	});
	

	$scope.showSelected = function(node, selected){
		DirService.getFileData().then(function(response){
			$scope.files = response.data.output.cpe[0].dir[0].dirContent;
		}, function(response){
			console.error(response);
		});
	};

	$scope.toggleSelection = function(file){
		file.selected = !file.selected;
		console.log(file.contentName);	
	};
});