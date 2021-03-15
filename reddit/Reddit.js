// AUTHOR: Jonathan Phouminh
// DATE: March 15th, 2021
const axios = require('axios');
const K = require(__dirname + "/../K.js");

// retrives reddit posts based on module
async function getRedditPosts(submodule) {
  var redditSubModule = "cuboulder";
  var url = `http://www.reddit.com/r/${submodule}/new/.json?limit=${K.postLimit}`;
  
  axios
  .get(url)
  .then((res) => {
    const data = res.data.data.children[0].data;

    // clean the data here 

    return data
    
  })
  .catch((err) => {
    console.log(err);
  });
} 

module.exports.getRedditPosts = getRedditPosts;