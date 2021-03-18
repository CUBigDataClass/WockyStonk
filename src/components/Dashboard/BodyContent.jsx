import React from "react";

import Graph from './Graph.jsx';
import SocialMedia from "./SocialMedia.jsx";
import '../styles/dashboardStyles/bodyContentStyle.css'

function BodyContent(){
    return(
        <div className='mainBody'>
            <Graph></Graph>
            <div className = 'socialMedia'>
                <section className='reddit'>
                    <SocialMedia></SocialMedia>
                </section>
                <section className='twitter'>
                    <SocialMedia></SocialMedia>
                </section>
            </div>
            
        </div>
        

    )
    

}

export default BodyContent;