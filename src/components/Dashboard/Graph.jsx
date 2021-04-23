import React from 'react';
import '../styles/dashboardStyles/graphStyle.css';
import ChartistGraph from 'react-chartist';
//import axios from 'axios';
class Graph extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            data:{
                labels: props.props.labels,
                series: [
                    props.props.series
                ]
            },
            options:{
                high: 10,
                low: 0,
                width:600,
            },
            type:"Line",
        }
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
 
        fetch('/data')
        .then(res => res.json())
        .then(newData => this.setState({data: newData},
            () => console.log("new data fetched " + this.state)
        ))
    }


    render(){
        return(
            <div className="graph">
                <ChartistGraph className={'ct-octave'} data={this.state.data} options={this.state.options} type={this.state.type}></ChartistGraph>
            </div>
        )
    }
}

export default Graph;