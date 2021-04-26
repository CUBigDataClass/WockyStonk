import React from 'react';
import '../styles/dashboardStyles/graphStyle.css';
import ChartistGraph from 'react-chartist';
//import axios from 'axios';
import data from './data.js';

class Graph extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            data:{
                labels: data.labels,
                series: [
                    data.series
                ],
                options:{
                    high: 10,
                    low: 0,
                    width:800,
                },
                type:"Line",
                search:"",
            }

        }
        this.componentDidMount=this.componentDidMount.bind(this);
        this.fetchData=this.fetchData.bind(this)
        this.update=this.update.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.weeklyUpdate=this.weeklyUpdate.bind(this);
    }

    async fetchData(){
        const response = await fetch('/data');
        const json = await response.json();
        this.setState({data:json}, () => console.log(this.state))
    }

    async componentDidMount(){

        this.fetchData();
    }
    
    update = () =>{
        const obj={
            daily:true
        }
        fetch("http://localhost:3030/refreshDaily" , {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then((result) => result.json())
        .then((info) => {console.log(info)})
        this.fetchData();
    }

    weeklyUpdate = () =>{
        const obj={
            weekly:true
        }
        fetch("http://localhost:3030/refreshWeekly" , {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then((result) => result.json())
        .then((info) => {console.log(info)})
        this.fetchData();
    }

    handleKeyDown = (e) => {
        console.log("here")
        if(e.key === 'Enter'){
            this.update();
        }
    }





    render(){
        console.log(this.state)
        return(
            <div className="graph">
                <ChartistGraph className={'ct-octave'} data={this.state.data} options={this.state.data.options} type={this.state.data.type}></ChartistGraph>
                <button  onKeyDown={this.handleKeyDown} onClick={this.update} className={"buttonRefresh"} > Daily</button>
                <button  onKeyDown={this.handleKeyDown} onClick={this.weeklyUpdate} className={"buttonRefresh"} > Weekly</button>
                {/* <input type="text" onHandleKeyDown={this.handleKeyDown} className={"inputGraph"}/> */}
            </div>
        )
    }
}

export default Graph;