import React, { useState } from "react";
import "../styles/table.css";
import Reddit from '../../reddit/Reddit'
import Cell from "./cell";

function Table(props) {

    const [posts,updatePosts] = useState([]);

    useState( async () => {
        let redditPackage = await Reddit.getRedditPosts('wallstreetbets'); 
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
                    key={index}
                    />
                )
            })}
        </div>
    );
}
export default Table;