import React from "react";
import Sidenav from './SideNav';

import '../styles/dashboardStyles/headerStyle.css';

function Header(){

    const [newKey, setNewKey] = React.useState('');

    function onSearch(){
        console.log(newKey);
    }
    
    return(
        <div className="header">
            <section className="search">
                <input className='dashboardInput' type="text" value={newKey} placeholder="Search" oncChange={(e) => setNewKey(e.target.value)} />
                <button onClick={onSearch}>Search</button>
            </section>
            <section className="title">
                <h2> Wocky Stonks</h2>
            </section>
            <section className="sideDrop">
                <Sidenav/>
            </section>
        </div>
    )
}


export default Header;