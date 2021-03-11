import React from "react";
import "../styles/Login.css";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import Grid from './Grid';
import BackgroundOverlay from './BackgroundOverlay'
import Footer from '../Footer/Footer'
import {Link} from "react-router-dom"; 

class Login extends React.Component {
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

  handleRegister() {
    console.log("register button tapped");
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
              <section id="TitleSection " class="box1 titleLogo">
                Wocky Stonks
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
                  text="Register"
                  clName="submitRegister"
                  submit={this.handleRegister}
                />
                </Link>
                <SubmitButton
                  text="Submit"
                  clName="submitButton"
                  submit={this.handleSubmit}
                />
              </section>
            </div>
            </div>
            <Footer /> 
      </div>
    );
  }
}

export default Login;
