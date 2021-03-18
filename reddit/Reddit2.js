const snoowrap = require('snoowrap');
// import snoowrap from 'snoowrap';
async function scrapeSubreddit(sr, keyword){
    const r = new snoowrap({
        userAgent: 'Whatever',
        clientId:'gntAgHZu9OBwTw' ,
        clientSecret: 'VhXmTC8Wr0w_hcYMzXEC_AvtZ2myTQ',
        refreshToken: '308511175368-YdShHK7RovCGtRKu9blziUz4paXluA'
    });
    const posts = await (await r.getSubreddit(sr,keyword)).search({query: keyword, time: '1 day', limit: 2});
    // const posts = await subreddit.getTop({limit: 1}); //gets the top 3 posts from StockMarket subreddit

    let arr = [];

    posts.forEach((post) => {
        arr.push({
          author: post.author,
          title: post.title,
          url : post.url,
        })
        console.log(arr);
      });

    
      

}
scrapeSubreddit('stocks', 'Tesla' );