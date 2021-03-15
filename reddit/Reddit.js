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
      const data = res.data.data.children[1].data.author;

      // clean the data here 
      resolve(data)  
    })
    .catch((err) => {
      console.log(err);
    });
  })
} 
module.exports.getRedditPosts = getRedditPosts;


// might want to make reddit posts part of a state var for dashboard and make it self managable. 