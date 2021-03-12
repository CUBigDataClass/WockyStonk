import React from 'react'; 
import { useLocation } from 'react-router';


function Dashboard() {
    const location = useLocation();
    console.log(location.state.creds);
    return (
        <h1> DashBoard </h1>
    )
}

export default Dashboard; 