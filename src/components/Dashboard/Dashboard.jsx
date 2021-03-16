import React from 'react'; 
import Table from '../Reddit/table';
import { useLocation } from 'react-router';


function Dashboard() {
    const location = useLocation();
    console.log(location.state.creds);
    return (
        <Table />
    )
}

export default Dashboard; 