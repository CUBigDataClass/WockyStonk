import React from 'react';
import '../styles/dashboardStyles/graphStyle.css';
import ChartistGraph from 'react-chartist';


class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                  [12, 9, 7, 8, 5]
                ]
            },
            options:{
                high: 10,
                low: 0,
                width:600,
                // axisX: {
                //   labelInterpolationFnc: function(value, index) {
                //     return index % 2 === 0 ? value : null; //skips every other label value
                //   }
                // }
            },
            type:"Line",

        }
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