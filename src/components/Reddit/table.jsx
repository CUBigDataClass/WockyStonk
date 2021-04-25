import React, { useState } from "react";
import "../styles/table.css";
import Reddit from '../../reddit/Reddit'
import Cell from "./cell";

//- Redux Imports
import { useSelector } from "react-redux";

function Table(props) {

    let searchedTicker = useSelector((state) => state.searchInput);

    const [posts,updatePosts] = useState([]);

    useState( async () => {
        let redditPackage = await Reddit.getRedditPosts(searchedTicker); 
        updatePosts(redditPackage);
    })

    setTimeout(async () => {
        let redditPackage = await Reddit.getRedditPosts(searchedTicker); 
        updatePosts(redditPackage);
    }, 10)

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