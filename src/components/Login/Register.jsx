import React from "react";
import "../styles/Login.css";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import Grid from './Grid';
import BackgroundOverlay from './BackgroundOverlay'
import {Link} from "react-router-dom"; 

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyStroke = this.handleKeyStroke.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit() {
    console.log(this.state.email);
    console.log(this.state.password);  
  }

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
      <div>
        <BackgroundOverlay />
        <Grid /> 
        <div className="loginContainer rounded">
          <div className="innerLoginContainer rounded">
              <section id="TitleSection " class="box1 title">
                Create Account
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
                </Link>
                <SubmitButton
                  text="Sign Me Up"
                  clName="submitButton"
                  submit={this.handleSubmit}
                />
              </section>
            </div>
            </div>
      </div>
    );
  }
}

export default Register;
