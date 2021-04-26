import React from "react";
import Table from '../Reddit/table';
import '../styles/dashboardStyles/socialStyle.css';
import Twitter from '../../Twitter'

function SocialMedia(){
    const x = Twitter.searchTweets("#AAPL");
    console.log(x);
    return(
        <div id="social">
            <Table/>
        </div>
    )
}

export default SocialMedia;