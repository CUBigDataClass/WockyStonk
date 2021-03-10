import React from "react";
import "../styles/Login.css";
import TextInput from "../Login/TextInput";
import SubmitButton from "../Login/SubmitButton";
import {Link} from "react-router-dom"; 

class Register extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    // bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyStroke = this.handleKeyStroke.bind(this);

    // state vars
    // will declare state var for the passwords and usernames
    // declare a submit handler function that you pass to the custom submit button component
    this.state = {
      email: "",
      password: ""
    };
  }

  // post this data through react-router-dom node js router to do the verification 
  // not sure if nodejs can call react-router-links
  // For now the button will just call the link to the dashboard
  handleSubmit() {
    console.log(this.state.email);
    console.log(this.state.password);  
  }

  // updates the state vars for password and username everytime its called
  handleKeyStroke(event) {
    const loc = event.target.type;

    if (loc === "email") {
      this.setState({
        email: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  }

  render() {
    return (
      <div className="innerLoginContainer rounded">
        <section id="TitleSection " class="box1 title">
          Create an Account
        </section>
        <section class="box2">
          <TextInput
            type="email"
            placeholder="Enter Email"
            keystroke={this.handleKeyStroke}
          />
          <TextInput
            type="password"
            placeholder="Enter Password"
            keystroke={this.handleKeyStroke}
          />
        </section>
        <section id="ButtonSection" class="box3"> 


          <Link to={'/register'}>
            <SubmitButton
                text="Sign Me Up"
                clName="submitButton"
                submit={this.handleSubmit}
            />
          </Link>
        </section>
      </div>
    );
  }
}

export default Register;
