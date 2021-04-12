var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'uhA1eCdkq3sIKqmGcLP2iHLem',
    consumer_secret: 'LFATI85ROPCSkxqXrJtbBg5gOcJmGrg52hTHdVeFkarXvAKI0w',
    access_token_key: '1182330351521124352-jq0ncBvXIKi9bFbK1cQlNU6LawjNmM',
    access_token_secret: 'VFpeSpyZollw4XNmEETCeZ43FL5lD3yYAvtyGZlsaWBag',

});

client.get('search/tweets', {q: '#stocks', count: 3}, function(error, tweets, response) {
    tweets.statuses.forEach(function(tweet) {
        console.log("tweet: " + tweet.text)
    });
 });