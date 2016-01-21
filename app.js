(function(){
    "use strict";

    angular.module('twitterFeed', ['ngMaterial', $httpProvider])

        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('orange')
                .accentPalette('yellow');
        })
        .config(['$httpProvider', function($httpProvider){
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.common = 'Content-Type: application/json';
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }])

        .controller('TweetController', ['$scope', '$http', function($scope, $http){

            $scope.results = [];

            $scope.getTweets = function() {

                var consumerKey = '';
                var consumerSecret = '';
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
