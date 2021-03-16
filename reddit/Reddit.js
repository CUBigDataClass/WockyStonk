//- AUTHOR: Jonathan Phouminh
//- DATE: March 15th, 2021
//- Retrieves Reddit Data
const axios = require('axios');
const K = require(__dirname + "/../K.js");

function getRedditPosts(submodule) {

  const url = `http://www.reddit.com/r/${submodule}/new/.json?limit=${K.postLimit}`;
  
  return new Promise((resolve, reject) => {
    axios
    .get(url)
    .then((res) => {

      //- Need to bundle this up back to the react client
      const author = res.data.data.children[1].data.author; 
      const title = res.data.data.children[1].data.title; 
      const subreddit = res.data.data.children[1].data.subreddit_name_prefixed;
      const content = res.data.data.children[1].data.selftext;
      const urlLink = res.data.data.children[1].data.url;
      
      console.log(`> ${content}`)
      // clean the data here 
      resolve("data")  
    })
    .catch((err) => {
      reject(err);
    });
  })
} 
module.exports.getRedditPosts = getRedditPosts;


// might want to make reddit posts part of a state var for dashboard and make it self managable. 