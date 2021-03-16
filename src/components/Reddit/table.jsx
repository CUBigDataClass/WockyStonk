import React, { useState } from "react";
import "../styles/table.css";
import Reddit from '../../reddit/Reddit'
import Cell from "./cell";

var mockData = {
  author: "glasssofwater",
  title: "What dorms should I apply for?",
  subreddit: "r/cuboulder",
  content:
    "I will be a first year, in-state student going into pre-engineering. I'm not much of a partier, but I want to have a decent number of close friends who I can hang out with. I've been looking at Kittredge and WillVille a lot, but I want to hear others' opinions. I'm wanting a quieter environment, but still one that has a decent social situation. From what I've heard, the engineering quad isn't the best place to dorm.",
  urlLink:
    "https://www.reddit.com/r/cuboulder/comments/m5wag3/what_dorms_should_i_apply_for/"
};

function Table(props) {

    const [posts,updatePosts] = useState([mockData]);

    useState( async () => {
        let redditPackage = await Reddit.getRedditPosts('TLRY'); 
        updatePosts(redditPackage);
    })

    return (
    <div className="tableContainer">

        {posts.map((currPost, index) => {
            return (
                <Cell
                author={currPost.author}
                title={currPost.title}
                subreddit={currPost.subreddit}
                content={currPost.content}
                urlLink={currPost.urlLink}
                />
            )
        })}
    </div>
    );
}

export default Table;


/* 


{items.map((item, index) => (
        <Link to={`/shop/${obj}`}>
          <h1 key={index}>{item}</h1>{" "}
        </Link>
      ))}

//- Testing Reddit Function 
let posts = async () => {
    console.log("before");
    let redditPackage = await Reddit.getRedditPosts('cuboulder'); 
    console.log("after"); 
}  
posts();

*/