import React from 'react';
import "../styles/Login.css";

class BackgroundOverlay extends React.Component {
   
    // constructor here if you need to pass props / bind functions 

    render(){
        return (
            <div> 
                <img 
                className="imagePlaceholder" 
                src="https://media3.giphy.com/media/5T0jY5SzGP9Z72L2AN/giphy.gif" 
                alt="animatedgif"/> 
            </div>
        )
    }

}

export default BackgroundOverlay;