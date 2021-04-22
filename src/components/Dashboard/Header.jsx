import React from "react";
import Sidenav from './SideNav';
import '../styles/dashboardStyles/headerStyle.css';
import { connect } from "react-redux";
import axios from "axios";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:""
        }
        this.update=this.update.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    update = () =>{
        //console.log(this.state);
        const word = this.state.search;
        console.log(word)
        this.props.dispatch({
            type:"searchInput",
            payload:word
        })
        axios
            .post('http://localhost3030/dashboard', word)
            .then(() => console.log('Sending search data back to express server') )
            .catch((err) => {
                console.log(err);
            });

    }

    onChange = (e) => {
        this.setState({search:e});
    }

    render(){
        return(
            <div className="header">
                <section className="search">
                    <input className='dashboardInput' type="text"  placeholder="Search" onChange={(e) => this.onChange(e.target.value)} />
                    
                </section>
                <button onClick={() => this.update()}>Search</button>
                <section className="title">
                    <h2> Wocky Stonks</h2>
                </section>
                <section className="sideDrop">
                    <Sidenav/>
                </section>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        searchInput:state.searchInput
    }
}




export default connect(mapStateToProps)(Header);