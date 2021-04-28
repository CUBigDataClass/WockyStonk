var Twitter = require('twitter');

function searchTweets(keyword){
    var client = new Twitter({
        consumer_key: 'uhA1eCdkq3sIKqmGcLP2iHLem',
        consumer_secret: 'LFATI85ROPCSkxqXrJtbBg5gOcJmGrg52hTHdVeFkarXvAKI0w',
        access_token_key: '1182330351521124352-pROgw76zuSJqJtqyXduoWxWEn3fldr',
        access_token_secret: 'VZ5yi61g8AiUjq0DdiCHiCUkODVzFxLzx6YfP0pf9zlPd',
    });

    //taken from https://medium.com/@federicojordn/simplertapp-twitter-search-api-with-node-js-29e4664db299
    client.get('search/tweets', {q: keyword, count: 5, result_type: 'recent', lang: "en"}, getUserInfo);
    function getUserInfo(err,tweets,response){
        if(err){
            console.log(err)
            throw(err)
        }
        tweets.statuses.forEach(function(tweet){
            console.log("Tweet: "+tweet.text)
            // id = tweet.id_str 
            // userName = tweet.user.screen_name
        })
        // embed = id + userName;
        // embed = `https://twitter.com/${userName}/status/${id}` //link needed for embeded html code
        //      client.get('statuses/oembed', {url: embed}, function(error, data, response){
         
        //  htmlCode = data.html
        //  console.log(htmlCode)
        // console.log(embed)
        // return embed
    //  }); 
     
    }
}
searchTweets("#AAPL");
module.exports.searchTweets = searchTweets;