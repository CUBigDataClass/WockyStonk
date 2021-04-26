import React, { useState } from 'react';
import '../styles/dashboardStyles/graphStyle.css';
import Chartist from 'react-chartist';
import { useSelector } from "react-redux";
import {Line} from 'react-chartjs-2';
import { useEffect } from 'react';


function Graph(props){
    const searchInput = useSelector((state) => state.searchInput);

    const startData = {
        labels:[0,1,2,3,4,5,6],

        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]

    }

    const [chartData, setChartData] = useState({})
    
    const chart = (newData) =>{
        console.log(newData)
        setChartData(newData)
    }

    useEffect(() => {
        fetch('/data')
        .then(res => res.json())
        .then((data) =>chart(data))
        //chart(startData)
    }, [])

    

    
    return(
        <div className="graph">
            {/* <ChartistGraph className={'ct-octave'} data={data} options={data.options} type={data.type}></ChartistGraph> */}
            <Line data={chartData} ></Line>
        </div>
    )

}

export default Graph;