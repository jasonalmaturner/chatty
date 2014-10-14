'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    
	var getMessages = function(){
		MessageService.getMessages().then(function(data){
			$scope.messages = data.data;
		})
	};

	getMessages();

	// MessageService.getMessages().then(function(data){
 //    	$scope.messages = data;
 //    });

    $scope.addMessage = function(message){
    	MessageService.addMessages($scope.message).then(function(){
    		getMessages();
    	});

    	$scope.message = "";
    }

  });
