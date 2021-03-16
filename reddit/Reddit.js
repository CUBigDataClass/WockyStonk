//- AUTHOR: Jonathan Phouminh
//- DATE: March 15th, 2021
//- Returns reddit data back to callee
const axios = require('axios');
const K = require(__dirname + "/../K.js");

function getRedditPosts(submodule) {
  const url = `http://www.reddit.com/r/${submodule}/new/.json?limit=${K.postLimit}`;
  return new Promise((resolve, reject) => {
    axios
    .get(url)
    .then((res) => {
      //- create an array of objects that you return
      let posts = [];
      res.data.data.children.forEach((post) => {
        posts.push(
          {
            "author" : post.data.author,
            "title" : post.data.title,
            "subreddit" : post.data.subreddit_name_prefixed,
            "content" : post.data.selftext,
            "urlLink" : post.data.url
          }
        )
      })
      resolve(posts)  
    })
    .catch((err) => {
      reject(err);
    });
  })
} 
module.exports.getRedditPosts = getRedditPosts;