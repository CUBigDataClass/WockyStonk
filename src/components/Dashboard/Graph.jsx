import React from 'react';
import '../styles/dashboardStyles/graphStyle.css';

function Graph(){

<<<<<<< Updated upstream
    return(
        <div className="graph">
            Graph placeholder
        </div>
    )
=======
    componentDidMount(){
        fetch('/data')
        .then(res => res.json())
        .then(newData => this.setState({series: newData},
            () => console.log("new data fetched " + newData)
        ))
    }
>>>>>>> Stashed changes

}

export default Graph;