'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    
	var getMessages = function(){
		MessageService.getMessages().then(function(data){
      // console.log(data.data)
			$scope.messages = data.data;
		})
	};

	getMessages();

	// MessageService.getMessages().then(function(data){
 //    	$scope.messages = data;
 //    });

    $scope.addMessage = function(message){
    	MessageService.addMessages($scope.message).then(function(res){
        // console.log(res)
    		getMessages();
    	});

    	$scope.message = "";
    }

  });
