import React from 'react';
import '../styles/dashboardStyles/sideNavStyle.css';
import { useHistory } from "react-router-dom";


function SideNav(){
    const history = useHistory();

    function handleOpen(){
        var x = document.getElementById('dropdown').style.width;
        if(x == "5vw"){
            document.getElementById('dropdown').style.width = 0;
        }
        else{
            document.getElementById('dropdown').style.width = "5vw"
        }
    }

    async function logOut(event){
        event.preventDefault();
        try{
            history.push("/");
        }
        catch(err){
            throw err;
        }
    }

    const image = "https://media-exp1.licdn.com/dms/image/C4D03AQGd0R7OGpq13Q/profile-displayphoto-shrink_200_200/0/1516245317503?e=1625097600&v=beta&t=RJXr9sp9YfSb-XJdk-hI-sb4XzGcafWnY1BXbTr3Kq4";
    return(
        <section className="sideNav">
            <span onClick={handleOpen}>
                <img className="profile-pic" src={image} ></img>
            </span>

            <section id="dropdown">
                <section className='filler'> </section>
                <section className='stonk'>
                    <button onClick={logOut}>Sign Out</button>
                </section>
            </section>
        </section>
    )
}

export default SideNav;