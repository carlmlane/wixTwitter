(function(){

    var consumerKey = 'MahO7BE0nFzmJ2qcSaRSJHGgk';
    var consumerSecret = 'xHaEjvf4Hg26WpHQNQgunOM4ChwoKkEcqnxmJHWvne06FHckVA';
    var tokenCredentials = consumerKey + ":" + consumerSecret;
    var encodedTokenCredentials = btoa(tokenCredentials);

    var req = {
        method: 'GET',
        url: 'https://api.twitter.com/oauth2/token',
        headers: {
            'Authorization': 'Basic '+ encodedTokenCredentials,
            'Content-Type': 'application/x-www-form-urlencoded:charset=UTF-8'
        },
        data: 'grant_type=client_credentials'

    };

    var oauth = function () {

        return {
            
        };

    };


}());