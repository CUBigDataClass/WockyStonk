var Twitter = require('twitter');

function searchTweets(keyword){
    var client = new Twitter({
        consumer_key: 'uhA1eCdkq3sIKqmGcLP2iHLem',
        consumer_secret: 'LFATI85ROPCSkxqXrJtbBg5gOcJmGrg52hTHdVeFkarXvAKI0w',
        access_token_key: '1182330351521124352-jq0ncBvXIKi9bFbK1cQlNU6LawjNmM',
        access_token_secret: 'VFpeSpyZollw4XNmEETCeZ43FL5lD3yYAvtyGZlsaWBag',
    
    });
    let embed = " ";
    let htmlCode = '';
    //taken from https://medium.com/@federicojordn/simplertapp-twitter-search-api-with-node-js-29e4664db299
    client.get('search/tweets', {q: keyword, count: 2, result_type: 'popular'}, function(error, tweets, response) {
        tweets.statuses.forEach(function(tweet){
            let id = (tweet.id_str) // extracts id of tweet
            let userName = (tweet.user.screen_name) // extracts username

            embed = `https://twitter.com/${userName}/status/${id}` //link needed for embeded html code

            client.get('statuses/oembed', {url: embed}, function(error, data, response){
                htmlCode = data.html;
                
            });
            console.log(htmlCode);
        });
     });
}
searchTweets('#stockmarket')
