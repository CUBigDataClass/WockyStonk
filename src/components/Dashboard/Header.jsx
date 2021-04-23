import React from "react";
import Sidenav from './SideNav';
import '../styles/dashboardStyles/headerStyle.css';
import { connect } from "react-redux";
import axios from "axios";

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:"",
        }
        this.update=this.update.bind(this);
        this.onChange=this.onChange.bind(this);
    }



    update = (event) =>{
        //console.log(this.state);
        event.preventDefault();
        
        // const searchInput ={
        //     userInput: this.state.search
        // };
        this.props.dispatch({
            type:"searchInput",
            payload:this.state.search
        });
        //console.log(searchInput);

        fetch("http://localhost:3030/data" , {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then((result) => result.json())
        .then((info) => {console.log(info)})

        // axios.post("http://localhost:3030/dashboard", {searchInput})
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data)
        //     })


        // axios
        //     .post("http://localhost:3030/dashboard", {searchInput}, axiosConfig)
        //     .then(() => {
        //         console.log("Sending data back to server");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

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
                <button onClick={this.update}>Search</button>
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