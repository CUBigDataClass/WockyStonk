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
                ],
                options:{
                    high: 10,
                    low: 0,
                    width:800,
                },
                type:"Line",
            }

        }
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
 
        fetch('/data')
        .then(res => res.json())
        .then((data) => this.setState({data},
            () => console.log("new data fetched " + this.state + data)
        ))
    }


    render(){
        console.log(this.state)
        return(
            <div className="graph">
                <ChartistGraph className={'ct-octave'} data={this.state.data} options={this.state.data.options} type={this.state.data.type}></ChartistGraph>
            </div>
        )
    }
}

export default Graph;