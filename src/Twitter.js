var Twitter = require('twitter');

function searchTweets(keyword){
    var client = new Twitter({
        consumer_key: 'uhA1eCdkq3sIKqmGcLP2iHLem',
        consumer_secret: 'LFATI85ROPCSkxqXrJtbBg5gOcJmGrg52hTHdVeFkarXvAKI0w',
        access_token_key: '1182330351521124352-jq0ncBvXIKi9bFbK1cQlNU6LawjNmM',
        access_token_secret: 'VFpeSpyZollw4XNmEETCeZ43FL5lD3yYAvtyGZlsaWBag',
    
    });
    // let arr = [];
    let link = " ";
    //taken from https://medium.com/@federicojordn/simplertapp-twitter-search-api-with-node-js-29e4664db299
    client.get('search/tweets', {q: keyword, count: 1, result_type: 'popular'}, function(error, tweets, response) {
        tweets.statuses.forEach(function(tweet){
            // arr.push({
            //     link : (tweet.entities.urls[0]["expanded_url"]) // to extract expanded url to create embeded code to display on website
    
            // })
            link = (tweet.entities.urls[0]["expanded_url"]);
            // 
            console.log(link)
            // client.get('statuses/oembed', {url: 'https://twitter.com/Bartonologist/status/1385271362588225539'}, function(error, data, response){
            //     console.log(data);
            // });
            
        });
            // console.log(arr);
     });
}
searchTweets('#stockmarket')
