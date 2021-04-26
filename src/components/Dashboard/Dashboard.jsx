import React from 'react'; 
import { useLocation } from 'react-router';
import BodyContent from './BodyContent'
import Buttons from './Buttons'
import Header from './Header'
//import Test from './testComponent';
import data from './data'
import Footer from '../Footer/Footer'

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            userSearch:""
        }
        this.updateSearch=this.updateSearch.bind(this);
    }

    updateSearch(newSearch){
        console.log(this.state)
        // console.log("Here?")
        this.setState({userSearch:newSearch},
            () => console.log(this.state));
    } 



    render(){
        return (
            <div>
                <Header props={this.props} updateSearch={this.updateSearch}/>
                <BodyContent/>
                <Footer/>
    
            </div>
    
        )
    }

}

export default Dashboard; 