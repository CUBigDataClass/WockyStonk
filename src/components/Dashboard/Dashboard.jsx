import React from 'react'; 
import { useLocation } from 'react-router';
import BodyContent from './BodyContent'
import Buttons from './Buttons'
import Header from './Header'
//import Test from './testComponent';


function Dashboard() {

    return (
        <div>
            <Header/>
            <BodyContent/>
            <Buttons/>

        </div>

    )
}

export default Dashboard; 