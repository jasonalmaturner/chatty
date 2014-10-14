'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http) {
   
    this.getMessages = function() {
	    return $http ({
	    	method: 'GET',
	    	url: 'http://localhost:9001'
	    })
		};

		this.addMessages = function(message){
			var data = {"message": message};
			return $http ({
				method: 'POST',
				data: data,
				url: 'http://localhost:9001'
			})
		}

  });
