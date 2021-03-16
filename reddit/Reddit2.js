const snoowrap = require('snoowrap');
// import snoowrap from 'snoowrap';
async function scrapeSubreddit(sr){
    const r = new snoowrap({
        userAgent: 'Whatever',
        clientId:'gntAgHZu9OBwTw' ,
        clientSecret: 'VhXmTC8Wr0w_hcYMzXEC_AvtZ2myTQ',
        refreshToken: '308511175368-YdShHK7RovCGtRKu9blziUz4paXluA'
    });
    const subreddit = await r.getSubreddit(sr);
    const posts = await subreddit.getTop({time: '1 hour', limit: 2}); //gets the top 3 posts from StockMarket subreddit

    let arr = [];

    posts.forEach((post) => {
        arr.push({
          title: post.title,
          score: post.score
        })
        console.log(arr);
      });

    
      

}
scrapeSubreddit('stocks');