(function(){
    "use strict";

    angular.module('twitterFeed', ['ngMaterial'])

        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('orange')
                .accentPalette('yellow');
        })

        .controller('TweetController', ['$scope', '$http', function($scope, $http){

            $scope.results = [];

            var stringGen = function (){
                var text = '';
                var charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
                for (var i=0; i < 32; i++)
                    text += charset.charAt(Math.floor(Math.random() * charset.length));
                return text;
            };

            $scope.getTweets = function() {

                var consumerKey = 'MahO7BE0nFzmJ2qcSaRSJHGgk';
                var consumerSecret = 'xHaEjvf4Hg26WpHQNQgunOM4ChwoKkEcqnxmJHWvne06FHckVA';
                var tokenCredentials = consumerKey + ":" + consumerSecret;
                var encodedTokenCredentials = btoa(tokenCredentials);

                $http({
                    method: 'GET',
                    url: 'https://api.twitter.com/oauth2/token',
                    headers: {
                        'Authorization': 'Basic '+ encodedTokenCredentials,
                        'Content-Type': 'application/x-www-form-urlencoded:charset=UTF-8'
                    },
                    data: 'grant_type=client_credentials'
                }).success(function(data){

                    $scope.results = data;

                }).error(function(error){
                    console.error(error);
                });

            };

        }]);

})();