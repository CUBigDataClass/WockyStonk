import React from "react";
import Sidenav from './SideNav';
import '../styles/dashboardStyles/headerStyle.css';
import { connect } from "react-redux";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:"",
        }
        this.update=this.update.bind(this);
        this.onChange=this.onChange.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
    }



    update = (event) =>{
        //console.log(this.state);
        //event.preventDefault();
        const word = this.state.search;
        console.log(word);
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
        
        this.props.updateSearch(word);
    }
    handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            this.update();
        }
    }

    onChange = (e) => {
        this.setState({search:e});
    }

    render(){
        return(
            <div className="header">
                <section className="search">
                    <input className='dashboardInput' type="text"  placeholder="Search" onChange={(e) => this.onChange(e.target.value)} onKeyDown={this.handleKeyDown} />
                    
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