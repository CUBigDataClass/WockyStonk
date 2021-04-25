import React from "react";

import Graph from './Graph.jsx';
import SocialMedia from "./SocialMedia.jsx";
import '../styles/dashboardStyles/bodyContentStyle.css'
import data from './data.js';
class BodyContent extends React.Component{

    render(){
        return(
            <div className='mainBody'>
                <Graph props={data}></Graph>
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

    

}

export default BodyContent;