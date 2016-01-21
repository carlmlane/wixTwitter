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

                $http({
                    method: 'GET',
                    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
                    params: {
                        count: '10',
                        oauth_consumer_key: '',
                        oauth_nonce: stringGen(),
                        oauth_signature_method: 'HMAC-SHA1',
                        oauth_timestamp: 'new Date().getTime()',
                        oauth_token: '',
                        user_id: '',
                        screen_name: ''
                    }
                }).success(function(data){

                    $scope.results = data;

                }).error(function(error){
                    console.error(error);
                });

            };

        }]);

})();
