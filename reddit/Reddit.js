// AUTHOR: Jonathan Phouminh
// DATE: March 15th, 2021

// Creating module that retrieves reddit posts for a # 

var axios = require('axios');
var redditSubModule = "cuboulder";
var returnLimit = 10;
var url = `http://www.reddit.com/r/${redditSubModule}/new/.json?limit=${returnLimit}`;


axios
      .get(url)
      .then((res) => {
        const data = res.data.data.children[0].data;
        console.log(data)
        
      })
      .catch((err) => {
        console.log(err);
      });