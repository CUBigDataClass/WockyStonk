import React from "react";
import NewGraph from './NewGraph'
import Graph from './Graph.jsx';
import SocialMedia from "./SocialMedia.jsx";
import '../styles/dashboardStyles/bodyContentStyle.css'
import data from './data.js';
class BodyContent extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            data:{
                labels: [],
                series: [
                    []
                ],
                options:{
                    high: 10,
                    low: 0,
                    width:800,
                },
                type:"Line",
            }
        }
    }

    render(){
        return(
            <div className='mainBody'>
                <Graph props={this.props}/>
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